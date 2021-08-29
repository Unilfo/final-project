import {SET_POKEMONS, setPokemons} from './actions/actions'

const initialState = {
    loading: false,
    pokemons: [],
    error: "",
};

export const loadPokemons = () => async (dispatch, getState) => {
    console.log('loadPokemons')
    const pokemons = await fetch("http://localhost:3001/pokemons").then(res => res.json())
    dispatch(setPokemons(pokemons))
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: {
            return {...state, pokemons: action.payload}
        }
        default:
            return state
    }
}
