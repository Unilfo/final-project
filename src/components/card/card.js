import React from 'react'
import {Button, Card}               from "react-bootstrap"
import {useHistory}                 from "react-router-dom"
import './style.scss'
import {useDispatch, useSelector}    from 'react-redux'
import {updatePokemon} from '../../utils'

const CardDetail = ({pokemon}) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const foundPokemon = useSelector(state => state.pokemons.filter(el => el.id === pokemon.id)[0])

    const catchPokemon = (item, e) => {
        e.stopPropagation()
        const status = 'caught'
        const date_capture = new Date().toDateString()
        const newPokemon = {
            ...item,
            date_capture,
            status
        }
        dispatch(updatePokemon(newPokemon))
    }

    return (
        <Card style={{ width: '12rem', height: '17rem' }}  className="card-detail m-4" onClick={()=> history.push(`/pokemons/${foundPokemon.id}`)}>
            <Card.Img variant="top" src={`images/pokemons/${foundPokemon.id}.png`}/>
            <Card.Body>
                <Card.Title>{foundPokemon.name}</Card.Title>
                <Button onClick={(e)=> catchPokemon(foundPokemon, e)} variant={foundPokemon.date_capture? "secondary" : "primary" } disabled={!!foundPokemon.date_capture}>Поймать</Button>
            </Card.Body>
        </Card>
    )
}

export default CardDetail
