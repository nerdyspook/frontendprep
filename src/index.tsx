import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuizContextProvider } from "./context/QuizContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
