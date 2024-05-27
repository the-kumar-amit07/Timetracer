import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
