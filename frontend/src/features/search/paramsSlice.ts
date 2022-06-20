import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface ParamsState {
  search: string;
}

const initialState: ParamsState = {
  search:  '',
};

export const searchParamsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setParams } = searchParamsSlice.actions;
export const selectParams = (state: RootState) => state.params;

export default searchParamsSlice.reducer;
