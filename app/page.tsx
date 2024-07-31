"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ListContainer } from '@/components/ListContainer'
import { pokemonModel } from "@/types/pokemon";
import { getPokemonData } from "@/utils/GetPokemonData";
import type { RootState } from "@/GlobalRedux/store"
import { useDispatch, useSelector } from "react-redux"
import { DetailModal } from "./components/DetailModal";
import { resetPokemonDetail } from "./GlobalRedux/Features/pokemon/pokemonSlice";

export default function Home() {

  const pokemonDetail = useSelector((state: RootState) => state.pokemon)

  const [pokemonList, setPokemonList] = useState<pokemonModel[]>([])
  const [text, setText] = useState<string>("")
  const [nextURL, setNextURL] = useState<string | null>(null)
  const [prevURL, setprevURL] = useState<string | null>(null)
  const [urlFetch, setUrlFetch] = useState<string>('')

  const dispatch = useDispatch() 

  const fetchPokemon = useCallback(async() => {
    dispatch(resetPokemonDetail())

    let url = urlFetch.length ? urlFetch :'https://pokeapi.co/api/v2/pokemon'
    const pokemonListAPIData = await  getPokemonData(url)
    setPokemonList(pokemonListAPIData.results)
    setNextURL(pokemonListAPIData.next)
    setprevURL(pokemonListAPIData.prev)
  },[urlFetch])


  useEffect( () => {    
    fetchPokemon()
  }, [fetchPokemon])

  const inputTitleHandler = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setText(event.target.value)
  }

  const nextButtonHandler = (value: string = "prev") => {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    if ( value === 'next') 
      url = nextURL ?? url
    else (  value === 'prev') 
      url = prevURL  ?? url  
    setUrlFetch(url)
  }

  return (
    <main>
      {pokemonDetail.id > 0 && <DetailModal detail={pokemonDetail}/> }

      <ListContainer list={pokemonList}/>
      <div className="flex gap-x-2 mt-2">
        <button data-testid="prev-button" onClick={() => nextButtonHandler('prev')} type="button" className={"rounded px-2 py-1 " + (prevURL ? "bg-white text-black" : "bg-transparent text-gray-300 cursor-not-allowed")}>Prev Page</button>
        <button data-testid="next-button" onClick={() => nextButtonHandler('next')} type="button" className={"rounded px-2 py-1 " + (nextURL ? "bg-white  text-black" : "bg-transparent text-gray-300 cursor-not-allowed")}>Next Page</button>
      </div>
     <input         
      data-testid="input-field"
      className="mt-2" 
      value={text} 
      onChange={inputTitleHandler} 
      type="text"
      />
    </main>
  )
}
