import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppWebComponent from "./utils/ToWebComponent";
import AppShadowComponent from "./utils/ToShadowComponent";

window.customElements.define(
  "formulario-entrega-custom-component",
  AppWebComponent
);
window.customElements.define(
  "formulario-entrega-shadow-component",
  AppShadowComponent
);

// window.renderFormularioEntrega = (containerId) => {
//   debugger;
//   window.customElements.define('formulario-entrega-custom-component', AppWebComponent);
//   window.customElements.define('formulario-entrega-shadow-component', AppShadowComponent);
// };

// window.unmountBrowse = (containerId) => {
//   ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
// };
