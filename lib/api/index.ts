import { pokemonApi } from "./pokemon-api";

import { Reducer, ReducersMapObject, Middleware } from "@reduxjs/toolkit";

interface IProcessedAPIs {
  reducer: Reducer<unknown, any> | ReducersMapObject<unknown, any>;
  middleware: Middleware[];
}

const initialProcessedAPIs: IProcessedAPIs = {
  reducer: {},
  middleware: [],
};

const arrRawApi = [pokemonApi];

const buildProcessedAPIs = () =>
  arrRawApi.reduce((accApi: IProcessedAPIs, currApi) => {
    return {
      reducer: { ...accApi.reducer, [currApi.reducerPath]: currApi.reducer },
      middleware: [...accApi.middleware, currApi.middleware],
    };
  }, initialProcessedAPIs);

export default buildProcessedAPIs;
