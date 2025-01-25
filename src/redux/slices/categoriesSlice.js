import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      const categoryMap = {};
      const result = [];
      
      action.payload.forEach(category => {
        const categoryCopy = { ...category, children: [] };
        categoryMap[category._id] = categoryCopy;
      });
      
      action.payload.forEach(category => {
        if (category.parent_category) {
          const parentId = category.parent_category._id;
          if (categoryMap[parentId]) {
            categoryMap[parentId].children.push(categoryMap[category._id]);
          }
        } else {
          result.push(categoryMap[category._id]);
        }
      });
      
      state.data = result;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCategories, setLoading, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
