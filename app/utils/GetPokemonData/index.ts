import { pokemonResModel } from "@/types/pokemon"

export async function getPokemonData(url= "https://pokeapi.co/api/v2/pokemon") {
  const res = await fetch(url)
  .then((response) => response.json())
  .then(async(data) => {
    const pokemonList = await Promise.all(
      data.results.map(async (pokemon:pokemonResModel) => {
        
        const pokemonDetail = await fetch(pokemon.url).then(res => res.json())
        const serializePokemon = {
          name: pokemonDetail.name,
          id: pokemonDetail.id,
          image: pokemonDetail.sprites.front_default,
          stats: pokemonDetail.stats,
          weight: pokemonDetail.weight,
          height: pokemonDetail.height,
          abilities: pokemonDetail.abilities,
        }        
        return serializePokemon
      })
    )    
    return {
      results: pokemonList,
      next: data.next,
      prev: data.previous
    }
  })
  return res
}
