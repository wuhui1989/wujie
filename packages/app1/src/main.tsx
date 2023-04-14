import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'

let root: ReactDOM.Root;
if (window.__POWERED_BY_WUJIE__) {
  // eslint-disable-next-line no-undef
  window.__WUJIE_MOUNT = () => {
    root = createRoot(document.getElementById("root") as HTMLElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>

      </React.StrictMode>
    );
  };
  window.__WUJIE_UNMOUNT = () => {
     root.unmount();
  };
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
  );
}
