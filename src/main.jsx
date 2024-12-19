import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import GloabalState from "./Context/Index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GloabalState>
        <App />
      </GloabalState>
    </BrowserRouter>
  </StrictMode>
);
