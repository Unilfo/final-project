import {SET_POKEMONS, SET_LOADING} from './actions'

const initialState = {
    loading: false,
    pokemons: [],
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: {
            return {...state, pokemons: action.payload, loading: false}
        }
        case SET_LOADING: {
            return {...state, loading: true}
        }
        default:
            return state
    }
}
