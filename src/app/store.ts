import { configureStore } from '@reduxjs/toolkit';
import formReduser from '../components/main/forms/formSlice';
import albumsReduser from '../components/main/home/UI/searchBarSlice';

const store = configureStore({
  reducer: {
    form: formReduser,
    albums: albumsReduser,
  },
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
