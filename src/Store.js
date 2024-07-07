import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import ProfileSlice from "./Slice/ProfileSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    profile: ProfileSlice,
  },
});
export default store;
