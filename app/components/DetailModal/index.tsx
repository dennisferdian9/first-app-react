import { pokemonModel } from "@/types/pokemon"
import Image from "next/image"

interface DetailModalProps {
  detail: pokemonModel
}
export const DetailModal: React.FC<DetailModalProps> = ({detail}) => {
  return (
   <div className="">
    <Image width={200} height={300} src={detail.image} alt={detail.name} />
    <p>{detail.name}</p>
    <p>weight: {detail.weight} m</p>
    <p>height: {detail.height} m</p>

   </div>
  )
}
