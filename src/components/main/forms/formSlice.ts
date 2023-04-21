import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TForm } from '../../../types/props-types';

// import * as toolkitRaw from '@reduxjs/toolkit';
// const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

type TInitialState = {
  data: TForm[];
  image: string[];
  visible: boolean;
};

const initialState: TInitialState = {
  data: [],
  image: [],
  visible: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitFormImg: (state, action: PayloadAction<string>) => {
      state.image.push(action.payload);
    },
    changeVisibility: (state) => {
      state.visible = !state.visible;
    },
    submitFormData: (state, action: PayloadAction<TForm>) => {
      state.data.push(action.payload);
    },
  },
});

export default formSlice.reducer;
export const { changeVisibility, submitFormImg, submitFormData } = formSlice.actions;
