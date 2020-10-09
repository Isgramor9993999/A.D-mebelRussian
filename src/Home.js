import React from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import five from './img/five.jpg';
export const Home = () => (
    <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
            <Col>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>БОЛЬШОЙ ВЫБОР</Card.Title>
                    <Card.Text>Мы реализуем продукцию различной ценовой категории, в связи с этим человек с любыми финансовыми возможностями найдет для себя подходящую мебел</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>НАДЕЖНОСТЬ</Card.Title>
                    <Card.Text>Мы поставляем продукцию только проверенных производителей, в качестве товаров которых ручаемся.</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>ЭКОНОМИЯ</Card.Title>
                    <Card.Text>У нас самые выгодные цены среди конкурентов! В нашем ассортименте красивая, современная мебель для человека с любыми финансовыми возможностями. </Card.Text>
                </Card.Body>
            </Card>
            </Col> 
        </Row>
    </Container>
    <Jumbotron />
    <Container>
        <Row>
            <Col md={7}>
                <img src={five} height={400}  className="d-block w-100" />
            </Col>
            <Col md={5}>
                <p>
                Высококачественная недорогая мебель, которая пользуется всё большей популярностью среди потребителей. Главным принципом работы нашей компании является забота о покупателе.
                </p>
                <Button href="tel:89379108300" variant="primary">Совершить Заказ!</Button>
            </Col>
        </Row>
    </Container>
    </>
)