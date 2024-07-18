"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { ListContainer } from '@/components/ListContainer'
import { pokemonModel } from "@/types/pokemon";
import { getPokemonData } from "@/utils/GetPokemonData";


export default function Home() {

  const [pokemonList, setPokemonList] = useState<pokemonModel[]>([])
  const [text, setText] = useState<string>("")
  const [nextURL, setNextURL] = useState<string | null>(null)
  const [prevURL, setprevURL] = useState<string | null>(null)
  const [urlFetch, setUrlFetch] = useState<string>('')

  const fetchPokemon = useCallback(async() => {
    console.log('test fetcj');

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

  const nextButtonHandler = (value: string) => {
    let url = 'https://pokeapi.co/api/v2/pokemon'
    if ( value === 'next') 
      url = nextURL ?? url
    else if (  value === 'prev') 
      url = prevURL  ?? url  
   
    setUrlFetch(url)
  }

  return (
    <main>
      <ListContainer list={pokemonList}/>
      <div className="flex gap-x-2 mt-2">
        <button onClick={() => nextButtonHandler('prev')} type="button" className={"rounded px-2 py-1 " + (prevURL ? "bg-white text-black" : "bg-transparent text-gray-300 cursor-not-allowed")}>Prev Page</button>
        <button onClick={() => nextButtonHandler('next')} type="button" className={"rounded px-2 py-1 " + (nextURL ? "bg-white  text-black" : "bg-transparent text-gray-300 cursor-not-allowed")}>Next Page</button>
      </div>
     <input className="mt-2" value={text} onChange={inputTitleHandler} type="text"/>
    </main>
  )
}
