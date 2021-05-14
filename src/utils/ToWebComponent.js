import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

class AppWebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  createMicroFrontEnd(title) {
    debugger;
    return React.createElement(App, { title }, React.createElement("div"));
  }

  connectedCallback() {
      debugger;
    this.mountPoint = document.createElement("div");
    const title = this.getAttribute("title");
    this.appendChild(this.mountPoint);
    ReactDOM.render(this.createMicroFrontEnd(title), this.mountPoint);

  }

  attributeChangedCallback(name, oldValue, newValue) {
    debugger;
    if (name === "title") {
      ReactDOM.render(this.createMicroFrontEnd(newValue), this.mountPoint);
    }
  }
}

export default AppWebComponent;
