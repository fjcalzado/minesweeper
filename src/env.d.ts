/// <reference types="vite/client" />

// We'll add here our environment variables. Remember all have string values.
interface ImportMetaEnv {
  readonly VITE_DARK_THEME: string;
  readonly VITE_X_SIZE: string;
  readonly VITE_Y_SIZE: string;
  readonly VITE_MINES: string;
}
