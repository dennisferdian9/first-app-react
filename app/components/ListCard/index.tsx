import { pokemonModel } from "@/types/pokemon"
import Image from "next/image"

interface listContainerProps {
  pokemon: pokemonModel
}
export const ListCard: React.FC<listContainerProps> = ({pokemon}) => {
  return (
    <div className="border bg-white px-2 py-1">
      <h2>{pokemon.name}</h2>
      <Image src={pokemon.image} alt={pokemon.name} width={200} height={400}/>
    </div>
  )
}
