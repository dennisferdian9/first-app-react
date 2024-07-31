"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './Features/pokemon/pokemonSlice';

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof setupStore


const rootReducer = combineReducers({
  pokemon: pokemonReducer
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

  export type AppStore = ReturnType<typeof setupStore>


