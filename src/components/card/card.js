import React from "react"
import {Button, Card} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import './style.scss'

const CardDetail = ({pokemon}) => {
    let history = useHistory()
    const catchPokemon = (pokemon, e) => {
        e.stopPropagation()
        let a = JSON.parse(localStorage.getItem('pokemons')) || [];
        pokemon['date'] = new Date()
        a.push(pokemon);
        localStorage.setItem('pokemons', JSON.stringify(a));
    }

    return (
        <Card style={{ width: '12rem', height: '19rem' }}  className="card-detail m-4" onClick={()=> history.push(`/pokemons/${pokemon.id}`)}>
            <Card.Img variant="top" src={`images/pokemons/${pokemon.id}.png`} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>{pokemon.id}</Card.Text>
                <Button onClick={(e)=> catchPokemon(pokemon, e)} variant="primary" >Поймать</Button>
            </Card.Body>
        </Card>
    )
}

export default CardDetail
