import React, {useEffect, useRef, useState} from 'react'
import CardDetail                           from "../../components/card"
import {Button, Col, Container, Row}        from "react-bootstrap"
import {useSelector}           from "react-redux"

const Home = () => {
    const pokemons = useSelector((state) => state.pokemons)
    const loading = useSelector((state) => state.loading)
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

    if(loading){
        return (
          <div>
            <div>Loading</div>
            <div ref={messagesEndRef} />
          </div>
      )
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
