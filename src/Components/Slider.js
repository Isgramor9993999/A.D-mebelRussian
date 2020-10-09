import React from 'react';
import { Carousel, } from 'react-bootstrap';
import slid1 from '../img/slid1.jpg';
import slid2 from '../img/slid2.jpg';
import slid3 from '../img/slid3.jpg';


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{'height':'400px'}}>
                <img
                    className="d-block w-100"
                    src={slid1}
                    alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Мебель России!</h3>
                    <p>Какой нибудь текст</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'400px'}}>
                <img
                    className="d-block w-100"
                    src={slid2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Мебель России!</h3>
                    <p>Какой нибудь текст</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'400px'}}>
                <img
                    className="d-block w-100"
                    src={slid3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Мебель России!</h3>
                    <p>Какой нибудь текст</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

};