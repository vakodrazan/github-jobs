import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { GlobalContextProvider } from "./pages/GlobalContext";


ReactDOM.render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>, document.getElementById('root'))