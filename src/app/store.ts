import { configureStore } from '@reduxjs/toolkit';
import visibilityReduser from '../components/main/forms/formSlice';

const store = configureStore({
  reducer: {
    visible: visibilityReduser,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
