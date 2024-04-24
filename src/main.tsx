import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import store from "./states/store.ts";

import { SWRConfig } from "swr";
import { fetcher } from "./api/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
    </Provider>
  </React.StrictMode>
);
