import {setLoading, setPokemons} from '../store/actions'

export const loadPokemons = () => async (dispatch, getState) => {
	dispatch(setLoading())
	console.log('loadPokemons')
	try {
		const pokemons = await fetch("http://localhost:3001/pokemons").then(res => res.json())
		dispatch(setPokemons(pokemons))
	}catch (error){
		console.log("error", error)
	}
}

export const updatePokemon = (pokemon) => async (dispatch, getState) => {
	const url = `http://localhost:3001/pokemons/${pokemon.id}`
	const fetchData = async () => {
		try {
			const response = await fetch(url,{
				method: 'PATCH',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(pokemon)
			})
			const json = await response.json()
			console.log('update db: ', json)
			const pokemons = await fetch("http://localhost:3001/pokemons").then(res => res.json())
			dispatch(setPokemons(pokemons))
		} catch (error) {
			console.log("error", error)
		}
	}
	fetchData()
}



