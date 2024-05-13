import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "@/app/utils/redux/slices/DataSlice";

const store = configureStore({
  reducer: dataReducer,
});

// console.log("store onCreate : ", store.getState());
store.subscribe(() => {
  console.log("store change : ", store.getState());
});

export default store;
