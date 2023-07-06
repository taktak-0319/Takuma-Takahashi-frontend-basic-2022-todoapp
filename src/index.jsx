import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";
import { AlertHandlerProvider } from "./contexts/alert_hundler";
import Alertmanager from "./components/Organisms/AlertManager";

ReactDOM.render(
  <AlertHandlerProvider>
    <Alertmanager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
