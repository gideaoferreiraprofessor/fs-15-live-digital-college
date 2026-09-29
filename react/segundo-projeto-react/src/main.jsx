import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router"
import { router } from "./router"

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
