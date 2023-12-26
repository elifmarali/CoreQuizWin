import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ExamsProvider } from "./context/ExamsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ExamsProvider>
      <App />
    </ExamsProvider>
  </AuthProvider>
);
