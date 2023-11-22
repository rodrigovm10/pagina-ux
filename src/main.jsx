import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CentroAyuda } from "./pages/CentroAyuda";
import { Calendario } from "../src/components/Calendario.jsx";
import { Reinscripciones } from "../src/components/Reinscripsiones.jsx";

import { PaginaPrincipal } from "./pages/PaginaPrincipal.jsx";
import BolsaTrabajo from "./pages/BolsaTrabajo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />,
  },
  {
    path: "/centro-de-ayuda",
    element: <CentroAyuda />,
  },
  {
    path: "/calendario",
    element: <Calendario />,
  },
  {
    path: "/reinscripciones",
    element: <Reinscripciones />,
  },
  {
    path: "/bolsa-de-trabajo",
    element: <BolsaTrabajo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
