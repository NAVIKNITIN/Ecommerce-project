import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./store/index.js";
import thunk from "redux-thunk";

let store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)


ReactDOM.render(<App/>,document.getElementById("root"));
