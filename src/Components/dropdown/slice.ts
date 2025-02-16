import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";

interface IDropdownState {
  isOpen: boolean;
  openId?: string | number | null;
}
const initialState: IDropdownState = {
  isOpen: false,
  openId: "",
};
const DropDownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    showMenu(state, action) {
      state.isOpen = true;
      state.openId = action.payload;
    },
    closeMenu(state) {
      state.isOpen = false;
      state.openId = "";
    },
  },
});

export default DropDownSlice.reducer;
export const { showMenu, closeMenu } = DropDownSlice.actions;

export const getOpen = (state: RootState) => state.dropDown;
