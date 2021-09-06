import React from "react"
import {useSelector}     from "react-redux"
import {Card, Container} from "react-bootstrap"
import './style.scss'


const PokemonDetails = ({itemId}) => {
    let pokemon = useSelector(state => state.pokemons[itemId - 1])
    const loading = useSelector((state) => state.loading)

    if(loading){
        return (
          <div>
              <div>Loading</div>
          </div>
        )
    }

    return (
      <Container>
      <div className='pk-details'>
            {pokemon?
              <Card className='pk-details_card' style={{display: 'flex', flexDirection: 'row', width: '50rem'}} >
                <Card.Img className='card_img' variant="top" src={`/images/pokemons/${pokemon.id}.png`} />
                <Card.Body>
                    <Card.Title>№ {pokemon.id}</Card.Title>
                    <Card.Text>
                        Name: <b>{pokemon.name.toUpperCase()}</b>
                    </Card.Text>
                    <Card.Text>
                        Status: {pokemon.status || 'free'}
                    </Card.Text>
                    <Card.Text>
                        Date catch: {pokemon.date_capture}
                    </Card.Text>
                </Card.Body>
            </Card>:
              <div>Not found</div>
            }
        </div>
          </Container>
          )
}

export default PokemonDetails
