export const roomSelected = (name, id, endPoint, title, pic) => {
  return { type: "ROOM_SELECTED", room: { name, id, endPoint, title, pic } };
};
