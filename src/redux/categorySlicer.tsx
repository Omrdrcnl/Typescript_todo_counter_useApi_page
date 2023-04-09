import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CategoryType = {
  id: number;
  parent_id: null;
  name: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type CategoryState = {
  categories: CategoryType[];
  initialized: boolean;
};

const initialState: CategoryState = {
  categories: [],
  initialized: false,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (
      state: CategoryState,
      action: PayloadAction<CategoryType[]>
    ) => {
      state.categories = action.payload;
      state.initialized = true;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    removeCategory: (state: CategoryState) => {
      state.categories = [];
      state.initialized = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
