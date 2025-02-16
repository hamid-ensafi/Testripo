import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface IinitialState {
  isOpen: boolean;
  openId: string;
}
const initialState: IinitialState = {
  isOpen: false,
  openId: "",
};
const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    openWindow(state, action) {
      state.openId = action.payload;
      state.isOpen = true;
    },
    closeWindow(state) {
      state.openId = "";
      state.isOpen = false;
    },
  },
});
export default windowSlice.reducer;
export const { openWindow, closeWindow } = windowSlice.actions;
export const getOpenWindow = (state: RootState) => state.Window;