import { configureStore } from '@reduxjs/toolkit/';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { searchApi } from './service/policies';
import searchParams from './features/search/paramsSlice';
import searchPolicies from './features/search/policiesSlice';

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        params: searchParams,
        policies: searchPolicies,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(searchApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;
