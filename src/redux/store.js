//NOTE:this code used for pure redux  now i used redux-toolkit
//
// import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";
// const store = createStore(rootReducer, applyMiddleware(logger));
// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import roomSliceReducer from "./feature/RoomSlice"
const store = configureStore({
  reducer: { roomSelected: roomSliceReducer },
  middleware:getDefaultMiddleware().concat(logger)

})

export default store
