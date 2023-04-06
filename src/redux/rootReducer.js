import { combineReducers } from "redux";
import roomReducer from "./room/roomReducer";

const rootReducer = combineReducers({
  roomData: roomReducer,
});
export default rootReducer;
