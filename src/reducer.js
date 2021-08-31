import {SET_POKEMONS, setPokemons} from './actions/actions'

const initialState = {
    loading: false,
    pokemons: [],
    error: "",
};

export const loadPokemons = () => async (dispatch, getState) => {
    console.log('loadPokemons')
    const pokemons = await fetch("http://localhost:3001/pokemons").then(res => res.json())
    pokemons.map(el => el['date_catch'] = null)
    let a = JSON.parse(localStorage.getItem('pokemons')) || [];
    a.map(el => {
        pokemons[el.id -1 ].date_catch = el.date_catch
    })
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
