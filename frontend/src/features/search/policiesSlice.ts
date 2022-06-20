import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface PoliciesState {
  search: any[];
}

const initialState: PoliciesState = {
  search: [],
};

export const searchPoliciesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    setPolicies: (state, action: PayloadAction<any[]>) => {
      state.search = action.payload;
    },
  },
});

export const { setPolicies } = searchPoliciesSlice.actions;
export const selectPolicies = (state: RootState) => state.policies.search;

export default searchPoliciesSlice.reducer;
