import { pokemonModel } from "@/types/pokemon"
import Image from "next/image"

// import type { RootState } from "@/GlobalRedux/store"
// import { UseSelector, useDispatch } from "react-redux"
import { setPokemonDetail } from "@/GlobalRedux/Features/pokemon/pokemonSlice"
import { useDispatch } from "react-redux"
interface listContainerProps {
  pokemon: pokemonModel
}
export const ListCard: React.FC<listContainerProps> = ({pokemon}) => {
  const dispatch = useDispatch() 

  const cardClickHandler = () => {
    dispatch(setPokemonDetail(pokemon))
  }
  
  return (
    <div onClick={cardClickHandler} className="border bg-white px-2 py-1">
      <h2>{pokemon.name}</h2>
      <Image src={pokemon.image} alt={pokemon.name} width={200} height={400}/>
    </div>
  )
}
