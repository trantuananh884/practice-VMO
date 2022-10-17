import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";

const loggerMiddleWare = (storeRedux) => (next) => (action) => {
  console.log(1);
  next(action);
  console.log(2);
};
const middleWares = [loggerMiddleWare];
const composeEnhencer = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composeEnhencer);
