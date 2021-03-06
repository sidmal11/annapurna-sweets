import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import from USER DEFINED JS
import App from "./App";
import { store, persistor } from "./redux/store";

//for redux
import { Provider } from "react-redux";

//for session persistance
import { PersistGate } from "redux-persist/integration/react";

//for router
import { BrowserRouter } from "react-router-dom";

//misc
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.register();
