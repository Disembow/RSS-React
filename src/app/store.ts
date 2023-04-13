import { configureStore } from '@reduxjs/toolkit';
import formReduser from '../components/main/forms/formSlice';

const store = configureStore({
  reducer: {
    form: formReduser,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
