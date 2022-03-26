import { createApi } from "@lib/create-api";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi("pokemonApi", "https://pokeapi.co/api/v2/");

// code splitting, inject when execute
export const pokemon = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: any) => response,
    }),
  }),
});

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  util: { getRunningOperationPromises },
} = pokemon;

// export endpoints for use in SSR
export const { getPokemonByName } = pokemon.endpoints;
