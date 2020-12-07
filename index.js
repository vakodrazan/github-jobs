import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./pages/App";
import { GlobalContextProvider } from "./pages/GlobalContext";

ReactDOM.render(
    <GlobalContextProvider>
        <Router>
            <App />
        </Router>
    </GlobalContextProvider>, document.getElementById('root'))