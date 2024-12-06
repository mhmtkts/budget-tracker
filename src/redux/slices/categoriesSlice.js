import { createSlice } from '@reduxjs/toolkit';
import { faUtensils, faHome, faShoppingCart, faCar, faHeartbeat, faGraduationCap, faShieldAlt, faFilm, faCog } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  categories: [
    { name: 'Food', icon: faUtensils },
    { name: 'Rent', icon: faHome },
    { name: 'Shopping', icon: faShoppingCart },
    { name: 'Transportation', icon: faCar },
    { name: 'Healthcare', icon: faHeartbeat },
    { name: 'Education', icon: faGraduationCap },
    { name: 'Insurance', icon: faShieldAlt },
    { name: 'Entertainment', icon: faFilm },
    { name: 'Utilities', icon: faCog },
    { name: 'Other', icon: faCog }
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
