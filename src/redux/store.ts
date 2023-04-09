import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlicer";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

const state = store.getState();
export type RootState = typeof state;

// export type RootState = ReturnType<typeof store.getState>;
