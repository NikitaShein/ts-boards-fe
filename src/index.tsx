import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Global from "./index.style";

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </BrowserRouter>
);

render(app, document.getElementById("root"));
