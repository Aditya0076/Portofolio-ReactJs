import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flowbite>
  </StrictMode>
);
