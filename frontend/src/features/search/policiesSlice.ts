import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { Search } from '../../service/policyTypes'



interface PoliciesState {
  search: Search[];
}

const initialState: PoliciesState = {
  search: [],
};

export const searchPoliciesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    setPolicies: (state, action: PayloadAction<Search[]>) => {
      state.search = action.payload;
    },
  },
});

export const { setPolicies } = searchPoliciesSlice.actions;
export const selectPolicies = (state: RootState) => state.policies.search;

export default searchPoliciesSlice.reducer;

/** interface Search
 * endDate: boolean
 * id: string
 * insuranceType = enum<insuranceType>
 * provider = string
 * startDate = string | Date
 * status = enum<status>
 */