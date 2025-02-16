import { configureStore } from "@reduxjs/toolkit";
import DropDownReducer from "@/Components/dropdown/slice";
import WindowReducer from "@/Components/window/slice";

const store = configureStore({
  reducer: {
    dropDown: DropDownReducer,
    Window: WindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
