import { configureStore } from '@reduxjs/toolkit';

import teamReducer from './teams';

const store = configureStore({
  reducer: {
    team: teamReducer,
  },
  preloadedState: {},
});

export default store;
