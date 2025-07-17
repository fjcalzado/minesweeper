import { createRoot } from "react-dom/client";
import config from "./env.config";
import { App } from "./app";
import "./index.css";

// Set theme from env
if (config.darkTheme) document.documentElement.setAttribute("data-theme", "dark");

// Render react app
const root = createRoot(document.getElementById("root"));

root.render(<App />);
