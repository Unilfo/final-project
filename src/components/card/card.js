import React, {useState} from "react"
import {Button, Card} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import './style.scss'

const CardDetail = ({pokemon}) => {
    let history = useHistory()
    const [disable, setDisable] = useState(pokemon.date_catch ? true : false)
    const catchPokemon = (pokemon, e) => {
        e.stopPropagation()
        let a = JSON.parse(localStorage.getItem('pokemons')) || [];
        pokemon['date_catch'] = new Date()
        a.push(pokemon);
        localStorage.setItem('pokemons', JSON.stringify(a));
        setDisable(true)
    }

    return (
        <Card style={{ width: '12rem', height: '17rem' }}  className="card-detail m-4" onClick={()=> history.push(`/pokemons/${pokemon.id}`)}>
            <Card.Img variant="top" src={`images/pokemons/${pokemon.id}.png`} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Button onClick={(e)=> catchPokemon(pokemon, e)} variant={disable? "secondary" : "primary" } disabled={disable}>Поймать</Button>
            </Card.Body>
        </Card>
    )
}

export default CardDetail
