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
      return { ...action.roomData };
    default:
      return state;
  }
};

export default roomReducer;
