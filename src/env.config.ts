const config = {
  darkTheme: import.meta.env.VITE_DARK_THEME === "true",
  xSize: Number(import.meta.env.VITE_X_SIZE ?? 3),
  ySize: Number(import.meta.env.VITE_Y_SIZE ?? 3),
  mines: Number(import.meta.env.VITE_MINES ?? 1),
} as const;

export default config;
