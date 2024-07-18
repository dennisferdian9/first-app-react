export interface pokemonResModel {
  url: string
  name: string
}

export interface pokemonModel {
  name: string
  id: number
  image: string
  stats: object
  weight: number
  height: number
  abilities: object[]
}
