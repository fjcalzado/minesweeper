interface MineData {
  mine: boolean;
  revealed: boolean;
}

/**
 * Utils
 */
export const generateMineData = (
  xSize: number,
  ySize: number,
  mineCount: number = 1
): MineData[] => {
  if (!xSize || !ySize || !mineCount || mineCount >= xSize * ySize)
    return undefined;

  // Initialize a base array
  const size = xSize * ySize;
  const mineData: MineData[] = Array(size)
    .fill(null)
    .map(() => ({ mine: false, revealed: false }));

  // Place mines randomly
  do {
    const index = generateRandomIndex(size);
    if (!mineData[index].mine) {
      mineData[index].mine = true;
      mineCount--;
    }
  } while (mineCount > 0);

  // Log it for debugging purposes
  logMineData(mineData, xSize, ySize);

  return mineData;
};

const generateRandomIndex = (size: number) => Math.floor(Math.random() * size);

const logMineData = (mineData: MineData[], xSize: number, ySize: number) => {
  if (!mineData) console.warn("Mine Data generation failed");
  else {
    console.log("[Generated Mine Data]");
    const clonedData = [...mineData];
    for (let i = 0; i < ySize; i++) {
      console.log(
        i.toString(),
        clonedData
          .splice(0, xSize)
          ?.map(({ mine }) => (mine ? "🟥" : "🟩"))
          .join("")
      );
    }
  }
};
