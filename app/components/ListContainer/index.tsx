import { pokemonModel } from "@/types/pokemon"
import {ListCard} from "@/components/ListCard"

interface listContainerProps {
  list: pokemonModel[]
}
export const ListContainer: React.FC<listContainerProps> = ({list}) => {
  return (
   <div className="grid grid-cols-6">
    {
      list.map(pokemon => (
       <ListCard key={pokemon.id} pokemon={pokemon}/>
      ))
    }
   </div>
  )
}
