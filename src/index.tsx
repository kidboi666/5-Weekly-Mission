import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootDoc: HTMLElement | null = document.getElementById("root");

if (rootDoc) {
  const root = ReactDOM.createRoot(rootDoc);
  root.render(<App />);
}
