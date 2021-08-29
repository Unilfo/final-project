import React from "react"
import {Button, Card} from "react-bootstrap"
import { useHistory } from "react-router-dom"


const CardDetail = ({pokemon}) => {
    let history = useHistory()
    const catchPokemon = (e) => {
          e.stopPropagation()
    }

    return (
        <Card style={{ width: '12rem', height: '19rem' }}  className="m-4" onClick={()=> history.push(`/pokemons/${pokemon.id}`)}>
            <Card.Img variant="top" src={`images/pokemons/${pokemon.id}.png`} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>{pokemon.id}</Card.Text>
                <Button onClick={(e)=> catchPokemon(e)} variant="primary" >Поймать</Button>
            </Card.Body>
        </Card>
    )
}

export default CardDetail
