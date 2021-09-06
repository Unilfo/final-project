import React, {useEffect, useRef, useState} from 'react'
import {useSelector}           from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import CardDetail                    from "../../components/card";

const CapturedPokemons = () => {
  const pokemons = useSelector(state => state.pokemons.filter(el => el.status === 'caught'))
  const loading = useSelector(state => state.loading)

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

  if(slice.length < 1){
    return(
        <div>
          <div>no caught pokemons</div>
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
                  <Button size="lg" onClick={()=> loadMore()}>Load more</Button>
                </Col>
            </Row>
          <div ref={messagesEndRef} />
        </Container>
    )
}

export default CapturedPokemons
