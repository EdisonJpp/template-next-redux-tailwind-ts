import {
  fetchBaseQuery,
  createApi as buildApi,
} from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export function createApiPart(reducerPath: string, url?: string) {
  return {
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: url || process.env.NEXT_PUBLIC_ENV_VARIABLE,
    }),
    extractRehydrationInfo(action: any, { reducerPath: path }: any) {
      if (action.type === HYDRATE) {
        return action.payload[path];
      }
    },
  };
}

// use to code splitting
export function createApi(reducerPath: string, url?: string) {
  return buildApi({
    ...createApiPart(reducerPath, url),
    endpoints: () => ({}),
  });
}
