import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/reducer";
import thunkMiddleware from "redux-thunk";

export const store = applyMiddleware(
  thunkMiddleware
)(createStore)

