export const SET_POKEMONS = "SET_POKEMONS"
export const SET_LOADING = "SET_LOADING"

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons,
})

export const setLoading = () => ({
    type: SET_LOADING
})
