import React, { Component } from "react";
import {Container, Row, Col, Image, Nav, Carousel} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, link} from 'react-router-dom';

export default class Home extends Component{
    render() {
        return(
            <Container>
            <Row className='px-4 pt-5 my-5 text-center'>
            <h1 className='display-4 fw-bold'>За то нам не стыдно</h1>
            <p className='lead mb-4'>Потому что вкладываем душу в наши игры, которые выпускаем в сеть. Чуть какая проблема - сразу
              же садимся за ее решение, пока не выйдет исправить!</p>
            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
              <a href='https://play.google.com/store/apps/dev?id=7565433773473044118&hl=ru&gl=US' type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>Google play</a>
              <a href='https://yandex.ru/games/developer?name=Snake%20App%20Studio' type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>Yandex игры</a>
      
            </div>
            <div className='overflow-hidden' style={{maxHeight: '30vh'}}>
              <div className='container px-5' >
                <img src='https://snakeappstudio.github.io/assets/img/logo/screen.jpg' className='img-fluid border rounded-3 shadow-lg mb-4' height={700} width={500}/>
      
              </div>
      
          </div>
          </Row>
          <Carousel>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src="https://play-valorant.ru/wp-content/uploads/2022/01/top-5-nft-games-2022.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src="https://img.championat.com/s/735x490/news/big/k/z/luchshie-mobilnye-igry_16373151941200457680.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src="https://fainaidea.com/wp-content/uploads/2020/03/4-13.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className='d-flex flex-wrap justify-content-center align-items-center'>
          <footer className='container pt-5 mb-5'>
          <div class="me-auto">
            <div class="d-flex flex-column">
              <a href="/" class="d-flex align-items-center text-decoration-none">
                <img class="flex-shrink-0 rounded-circle" src="https://snakeappstudio.github.io/assets/img/logo/logo.png" width="60" height="60" alt="Логотип IGS"></img>
                <div class="logo fs-3 text-dark ms-3 m-0">Snake App Studio</div>
              </a>
            </div>
            <ul class="nav col-12 pt-2 px-0">
              <li class="nav-item"><a href="/" class="nav-link text-dark underline fs-6 ms-0 ps-0">Главная</a></li>
              <li class="nav-item"><a href="/games.html" class="nav-link underline text-muted--link text-dark fs-6 ms-0 ps-0">Игры</a></li>
              <li class="nav-item"><a href="/more.html" class="nav-link underline text-muted--link text-dark fs-6 ms-0 ps-0">Подробнее</a></li>
              <li class="nav-item"><a href="/look.html" class="nav-link underline text-muted--link text-dark fs-6 ms-0 ps-0">Связаться</a></li>
            </ul>
            <ul class="nav col-12">
              <li class="nav-item"><a href="#" class="nav-link text-dark underline fs-6 ps-0 py-0 text-muted--link">Наши игры</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-dark underline fs-6 ms-0 py-0 text-muted--link">+7 (xxx) xxx-xx-xx</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-dark underline fs-6 py-0 text-muted--link">mailto: xx@xx.xx</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-dark underline fs-6 py-0 text-muted--link">Телеграм</a></li>
              <li class="nav-item"><a href="#" class="nav-link text-dark underline fs-6 py-0 text-muted--link">ВК</a></li>
            </ul>
          </div>
          <div>
        </div>
          </footer>
      
      
        </Row>
        <div>
              <script src="https://apps.elfsight.com/p/platform.js" defer></script>
              <div class="elfsight-app-0906ef07-df7f-4abc-9e89-ce6fef9ce7da"></div>
              </div>
            
        </Container>

        )
    }
}







