import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./CoffeeSlice";
import navReducer from "./navSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    nav: navReducer,
  },
});

export default store;
