import React, {useEffect, useRef, useState} from 'react'
import CardDetail from "../card"
import {Button, Col, Container, Row} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {loadPokemons} from "../../reducer"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPokemons());
    },[dispatch])

    const pokemons = useSelector((state) => state.pokemons)

    const [noOfElement, setnoOfElement] = useState(10)
    const slice = pokemons.slice(0, noOfElement)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [noOfElement]);

    const loadMore = () => {
        setnoOfElement(noOfElement + 5)
    }

    return (
        <Container>
            <Row className="justify-content-center m-0" >
                {slice.map(el => {
                    return (
                        <CardDetail key={el.id} pokemon={el}/>
                    )
                })}
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <Button size="lg" onClick={() => loadMore()}>Load more</Button>
                </Col>
            </Row>
            <div ref={messagesEndRef} />
        </Container>
    )
}

export default Home
