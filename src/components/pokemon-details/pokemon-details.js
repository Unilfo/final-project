import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {Card} from "react-bootstrap"

const PokemonDetails = ({itemId}) => {
    let pokemon = useSelector(state => state.pokemons[itemId -1])
    const [item, setItem] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!pokemon){
            setLoading(true)
            const url = `http://localhost:3001/pokemons/${itemId}`
            const fetchData = async () => {
                try {
                    const response = await fetch(url)
                    const json = await response.json()
                    setItem(json)
                    setLoading(false)
                } catch (error) {
                    console.log("error", error)
                }
            }
            fetchData()
        }else{
            setItem(pokemon)
        }
    }, [itemId, pokemon])

    if(loading){
        return <div>Loading</div>
    }

    return (
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row'}}>
            <Card.Img variant="top" src={`http://localhost:3000/images/pokemons/${item.id}.png`} />
            <Card.Body>
                <Card.Title>{item.id} </Card.Title>
                <Card.Text>
                    {item.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PokemonDetails
