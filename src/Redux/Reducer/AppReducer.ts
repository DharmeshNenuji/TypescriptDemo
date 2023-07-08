import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice({
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      console.log('state :: ', state);
      state.userData = {...(state.userData || {}), ...action.payload};
    },
    setLogout: state => {
      state.userData = null;
    },
  },
  name: 'test',
});

export const {setUserData, setLogout} = AppSlice.actions;
export default AppSlice.reducer;
