import React from "react"
import {useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import CardDetail from "../card";

const CapturedPokemons = () => {
    let pokemons = useSelector(state => state.pokemons.filter(el => el.date_catch))

    return (
        <Container>
            <Row className="justify-content-center m-0" >
                {pokemons.map(el => {
                    return (
                        <CardDetail key={el.id} pokemon={el}/>
                    )
                })}
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <Button size="lg" onClick={''}>Load more</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CapturedPokemons
