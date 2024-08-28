import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from '../redux/blockSlice';

 const store = configureStore({
  reducer: {
    blocks: blocksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;