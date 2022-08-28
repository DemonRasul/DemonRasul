import React, { Component } from "react";
import {Container, Row, Col, Image, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Callback from '../Pages/Callback'

export default class Header extends Component{
    render() {
        return(
            <>
            <Container>
            <header className='my-2'>
              <Row>
      
                <Col md='3'> <Image src= 'https://snakeappstudio.github.io/assets/img/logo/logo.png' width={80}/> <strong>Snake App Studio</strong></Col>
      
                <Col md='8'>
                    <Nav variant="pills" defaultActiveKey="" className='d-flex justify-content-end'>
                      <Nav.Item>
                        <Nav.Link  href="/home">Игры</Nav.Link>
                    </Nav.Item>
      
                    <Nav.Item>
                        <Nav.Link href="/about">Подробнее</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/callback">Связаться</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </header>
            
      
          </Container>
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