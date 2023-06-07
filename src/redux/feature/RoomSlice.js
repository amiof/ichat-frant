import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  id: "",
  endPoint: "",
  title: "",
  pic: "",
}
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    roomSelector: (state, action) => {
      state.name = action.payload.name
      state.id = action.payload.id
      state.endPoint = action.payload.endPoint
      state.title = action.payload.title
      state.pic = action.payload.pic
    },
  }
})

export default roomSlice.reducer
export const { roomSelector } = roomSlice.actions
