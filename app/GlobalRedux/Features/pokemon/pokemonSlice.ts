import { pokemonModel } from "@/types/pokemon"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: pokemonModel = {
  name: '',
  id: 0,
  image: '',
  stats: {},
  weight: 0,
  height: 0,
  abilities: []
}

export const counterSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonDetail: (state, action: PayloadAction<pokemonModel>) => {
      const {name, id, image, stats, weight, height, abilities} = action.payload
      state.name = name
      state.id = id
      state.image = image
      state.stats = stats
      state.weight = weight
      state.height = height
      state.abilities = abilities
    },
    resetPokemonDetail: (state) => {
      state.name = ''
      state.id = 0
      state.image = ''
      state.stats = {}
      state.weight = 0
      state.height = 0
      state.abilities = []
    },
  }
})

export const {setPokemonDetail, resetPokemonDetail} = counterSlice.actions

export default counterSlice.reducer