export const roomSelected = (name, id, endPoint, title, pic) => {
  return { type: "ROOM_SELECTED", roomData: { name, id, endPoint, title, pic } };
};
