import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);
