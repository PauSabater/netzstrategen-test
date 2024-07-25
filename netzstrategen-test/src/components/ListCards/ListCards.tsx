'use client'

import { useEffect, useState } from "react";
import { Card, ICard } from "../Card/Card";
import { Filters } from "../Filters/Filters";


export function ListCards({data}: {data: ICard[]}) {

    const [dataCards, setDataCards] = useState(data)
    const [counter, setCounter] = useState(0)


    const onInputChange = async (name: string)=> {

        const response = await fetch(`https://pokeapi.co/api/v2/type/${name}`)
        let data: any

        if (response.ok) {
            data = await response.json() as any
            console.log(data)

            const newPokemonObj = data.pokemon.map((pokemon: any)=> {
                return {
                    name: pokemon.pokemon.name,
                    url: pokemon.pokemon.url
                }
            })

            setDataCards(newPokemonObj)
        }
    }





    return (
        <>
        <Filters callback={onInputChange}/>
        <button
            onClick={()=> setCounter(counter + 1)}
        >counter
        </button>
        {
            <>
                <h1>{counter}</h1>
            {
            dataCards.map((result)=> {
                return (
                    <Card name={result.name} />
                )
            })
            }

            </>
        }
        </>
    )
}