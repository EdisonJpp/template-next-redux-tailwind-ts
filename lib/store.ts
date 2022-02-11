import { configureStore } from "@reduxjs/toolkit";

import buildProcessedAPIs from "./api";

// import { setupListeners } from '@rtk-incubator/rtk-query'

const makeStore = () => {
  const APIs = buildProcessedAPIs();
  return configureStore({
    reducer: {
      ...APIs.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(APIs.middleware),
  });
};

const store = makeStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export default store;
