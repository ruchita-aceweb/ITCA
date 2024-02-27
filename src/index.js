import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
