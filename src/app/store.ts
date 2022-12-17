import {configureStore} from '@reduxjs/toolkit';
import {doorCodeReducer} from '../containers/DoorCode/doorCodeSlice';

export const store = configureStore({
  reducer: {
    doorCode: doorCodeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;