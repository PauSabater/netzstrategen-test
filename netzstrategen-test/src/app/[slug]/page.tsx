import { IApiPokemon } from "../page"

export async function generateStaticParams() {

    // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    // let data: IApiPokemon | any

    // if (response.ok) {
    //     data = await response.json() as IApiPokemon
    // }

    const data: IApiPokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then((res) => res.json())

    return data.results.map((pokemon) => ({
        slug: pokemon.name,
    }))
}



export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }