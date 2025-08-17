import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  name: string;
}

const initialState: SearchState = { name: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = searchSlice.actions;
export default searchSlice.reducer;
