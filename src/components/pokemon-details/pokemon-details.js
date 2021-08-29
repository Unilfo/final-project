import React from "react"
import {useSelector} from "react-redux";
import {Image} from "react-bootstrap";

const PokemonDetails = (props) => {
    console.log(props.match.params.id)
    const pokemon = useSelector(state => state.pokemons[props.match.params.id -1 ])

    return (
        <div>
                <h5>PokemonDetails</h5>
                <div>{pokemon?.id || 0}</div>
                <div>{pokemon?.name || 0}</div>
                <Image src={`http://localhost:3000/images/pokemons/${pokemon?.id || props.match.params.id}.png`} rounded />
            </div>
    )
}

export default PokemonDetails
