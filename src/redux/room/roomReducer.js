// NOTE: this code is old before add redux-toolkit and now dont need this

const initalState = {
  name: "",
  id: "",
  endPoint: "",
  title: "",
  pic: "",
};
const roomReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ROOM_SELECTED":
      return { ...action.room };
    default:
      return state;
  }
};

export default roomReducer;

