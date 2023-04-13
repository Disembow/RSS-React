import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { defaultDeliveryDate } from '../../utils/data';
import { PostServices } from '../../../types/enums';
import { TForm } from '../../../types/props-types';

// type TInitialState = {
//   radio: string;
//   firstName: string;
//   lastName: string;
//   deliveryDate: string;
//   postProvider: string;
//   checkbox: boolean;
// };

type TInitialState = {
  data: TForm[];
  visible: boolean;
};

const initialState: TInitialState = {
  data: [],
  visible: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeVisibility: (state) => {
      state.visible = !state.visible;
    },
    // submitFormData: (state, action: PayloadAction<TInitialState>) => {},
    // submitFormImg: (state, action: PayloadAction<TInitialState>) => {},
  },
});

export default formSlice.reducer;
export const { changeVisibility } = formSlice.actions;
