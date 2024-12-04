import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; // CSS base do PrimeReact

import { PrimeReactProvider } from "primereact/api";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
