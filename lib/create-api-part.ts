import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default function createApiPart(reducerPath: string) {
  return {
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_ENV_VARIABLE,
    }),
  };
}
