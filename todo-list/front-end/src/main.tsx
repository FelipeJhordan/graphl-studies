import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

// Eu podia ter feito isso num arquivo separado ts ou css via @import
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <CssBaseline />
  </React.StrictMode>
);
