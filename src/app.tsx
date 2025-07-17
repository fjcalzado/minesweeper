import React from "react";
import config from "./env.config";
import { generateHint, generateMineData } from "./app.data";

/**
 * App component
 */
export const App: React.FC = () => {
  // State
  const [mineList, setMineList] = React.useState(() =>
    generateMineData(config.xSize, config.ySize, config.mines).flat()
  );

  // Computed values
  const hint = React.useMemo(() => generateHint(mineList), [mineList]);

  // Handlers
  const createMineCardClickHandler = (index: number) => () => {
    setMineList(s => {
      const clone = [...s];
      clone[index] = { ...clone[index], revealed: true };
      return clone;
    });
  };

  return (
    <div className="p-4 h-screen w-screen flex flex-col gap-4 items-stretch justify-stretch">
      <div className={`grid grid-cols-[1fr_auto] gap-3 box-border`}>
        <p className="font-semibold text-xl text-center align-middle">{hint}</p>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer`}
          onClick={() => window.location.reload()}
        >
          Play again
        </button>
      </div>
      <div
        className={`grow grid grid-cols-2 gap-3 box-border`}
        style={{
          gridTemplateColumns: `repeat(${config.xSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${config.ySize}, minmax(0, 1fr))`,
        }}
      >
        {mineList.map(({ mine, revealed }, key) => {
          const isMine = revealed && mine;
          const isClean = revealed && !mine;

          return (
            <div
              key={key}
              className={`
            p-2 rounded-lg shadow-sm 
            flex items-center justify-center
            border border-gray-200 dark:border-gray-700 
            bg-gray-50 dark:bg-gray-800 
            ${isMine && "bg-red-200 dark:bg-red-800"}
            ${isClean && "bg-green-200 dark:bg-green-800"}
            ${!revealed && "hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"}
            
          `}
              onClick={createMineCardClickHandler(key)}
            >
              {revealed && (
                <img
                  className="p-2 max-h-full max-w-full"
                  src={isMine ? "/bomb.png" : "/tick.png"}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
