import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, createSystem } from "@chakra-ui/react"; // Correct import for v2
import App from "./App";

import themeConfig from "../theme";

const system = createSystem(themeConfig);

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
