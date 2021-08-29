import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {NavLink} from "react-router-dom"
import './style.scss'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="pd-navbar" sticky="top">
                <Nav>
                    <Nav.Link as={NavLink} to='/' exact>Pokedex</Nav.Link>
                    <Nav.Link as={NavLink} to='/pokemons'>Pokemons</Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Header
