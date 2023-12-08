// coffeeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: [
    {
      name: "Frank Torres Geisha",
      region: "Colombia, Geisha",
      description:
        "A wonderful coffee with notes of red fruit, floral honey, and tropical fruit. This Geisha coffee from Frank Torres is a taste sensation not to be missed.",
      notes: ["blood orange", "berries", "apple"],
      prices: [32.0, 55.0],
    },
    // Add other 7 coffee objects here with different names, regions and descriptions
  ],
};

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    // You can put some actions here if you want to modify the state
  },
});

// If you have reducers
// export const { action1, action2 } = coffeeSlice.actions;

export default coffeeSlice.reducer;
