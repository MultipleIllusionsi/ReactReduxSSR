// SSR REDUX
import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export default req => {
  const axiosInstance = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });

  const middlewares = [thunk.withExtraArgument(axiosInstance)];

  // if (process.env.NODE_ENV === "development") {
  //   middlewares.push(logger);
  // }

  const store = createStore(reducers, {}, applyMiddleware(...middlewares));

  return store;
};
