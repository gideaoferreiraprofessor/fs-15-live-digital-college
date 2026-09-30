import "./main.css"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';
import { RouterProvider } from "react-router";
import { router } from "./routes/index.jsx";

const primereact = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'none',
    }
  },
  license: "eyJpZCI6IjRiODAzOWU3LWNhY2UtNDQ3Yi05NzdlLWIyZDA2OGNjMDQxNSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA3MjQ2NjYsImV4cCI6MTgyMjI2MDY2Nn0.bt0Mmnr9Oxv-w_KKKF5cT6JyjXtne3gmMOYqSIr-0GIHz7pKxaoMlZsL3RRpqohdCCNs31alG0KAS1ii7xqJCg"
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider  {...primereact} preflight={false}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>,
);
