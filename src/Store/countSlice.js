import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
       
    add:(state)=>state+1,

    remove:(state)=>state-1
  }
});

export const { add, remove } = countSlice.actions;

export default countSlice.reducer;
