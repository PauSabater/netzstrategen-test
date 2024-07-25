import styles from "./page.module.css"
import { ICard } from "@/components/Card/Card"
import { ListCards } from "@/components/ListCards/ListCards";


export interface IApiPokemon {
    count: number,
    next: string,
    previous: null | string,
    results: {
        name: string,
        url: string
    }[]
}

export default async function Home() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    let data: IApiPokemon | any

    if (response.ok) {
        data = await response.json() as IApiPokemon
    }


    return (
        <main className={styles.main}>
            <ListCards data={data.results as ICard[]}/>
        </main>
    )
}
