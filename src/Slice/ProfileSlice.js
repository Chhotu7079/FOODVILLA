import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: { profileStatus: false },
  reducers: {
    changeProfile: (state) => {
      state.profileStatus = !state.profileStatus;
    },
  },
});

export const { changeProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
