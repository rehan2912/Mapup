import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  region: null,
  currency: null,
  speedUnit: null,
  distanceUnit: null,
  volumeUnit: null,
  timezones: null,
  nightMode: false,
  country_name:null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION':
      return { ...state, region: action.payload };
    case 'SET_REGION_INFO':
      const { currency, speedUnit, distanceUnit, volumeUnit, timezones ,country_name } = action.payload;
      return { ...state, currency, speedUnit , distanceUnit, volumeUnit, timezones,country_name };
    case 'TOGGLE_NIGHT_MODE':
      return { ...state, nightMode: !state.nightMode };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});

export default store;