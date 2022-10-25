import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './players';
import teamReducer from './teams';

const store = configureStore({
  reducer: {
    team: teamReducer,
    player: playerReducer,
  },
  preloadedState: {},
});

export default store;
