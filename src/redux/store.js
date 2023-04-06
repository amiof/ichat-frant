import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import roomReducer from "./room/roomReducer";

const store = createStore(roomReducer, applyMiddleware(logger));

export default store;
