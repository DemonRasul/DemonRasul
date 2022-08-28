import React, { Component } from "react";
import {Container, Row, Col, Image, Nav, Navbar, FormControl, Button, Form} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Callback from '../Pages/Callback'


export default class Header extends Component{
    render() {
        return(
            <>
            <Navbar collapseOnSelect expand='md' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src="https://snakeappstudio.github.io/assets/img/logo/logo.png"
                        height="30"
                        width="30"
                        className='d-inline-block align-top'
                        alt="Logo"
                        />Snake App Studio

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  href="/">Игры</Nav.Link>
                            <Nav.Link  href="/about">О нас</Nav.Link>
                            <Nav.Link  href="/blog">Блог</Nav.Link>
                            <Nav.Link  href="/contacts">Связаться</Nav.Link>

                        </Nav>
                        <Form inline >
                            <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-sm-2"
                            />
                        </Form>
                        <Button variant="outline-info">Поиск</Button>
                        

                    </Navbar.Collapse>
                </Container>
            </Navbar>







          <Router>
                <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route exact path='/about' element={<About/>}/>
                  <Route exact path='/callback' element={<Callback/>}/>
                  
                </Routes>
            </Router>
          </>

        )
    }
}