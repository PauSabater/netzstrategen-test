

export const getCharactersApi = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    let data: IApiPokemon | any

    if (response.ok) {
        data = await response.json() as IApiPokemon
    }
}