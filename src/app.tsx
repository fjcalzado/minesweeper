import React from "react";
import { generateMineData } from "./app.data";

/**
 * Constants
 */
const X_SIZE = 3;
const Y_SIZE = 3;
const MINES = 2;

/**
 * App component
 */
export const App: React.FC = () => {
  const [mineList, setMineList] = React.useState(() =>
    generateMineData(X_SIZE, Y_SIZE, MINES).flat()
  );

  const createMineCardClickHandler = (index: number) => () => {
    setMineList(s => {
      const clone = [...s];
      clone[index] = { ...clone[index], revealed: true };
      return clone;
    });
  };

  return (
    <div
      className={`p-4 h-screen w-screen grid grid-cols-2 gap-3 box-border`}
      style={{
        gridTemplateColumns: `repeat(${X_SIZE}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${Y_SIZE}, minmax(0, 1fr))`,
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
              <img className="p-2 max-h-full max-w-full" src={isMine ? "/bomb.png" : "/tick.png"} />
            )}
          </div>
        );
      })}
    </div>
  );
};
