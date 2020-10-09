import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import jub from '../img/jub.jpg';
import styled from 'styled-components';

const Styles = styled.div ` 
    .jumbo {
        background: url(${jub}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px
        position: relativel;
        z-index: -2;    
    }
`;

const Jumbotron =() => (
    <Styles>
        <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>A.D - Мебель России!</h1>
            <p>Качественная мебель По всей России
                Закупаем только у лучших поствщиков России.
            </p>
        </Container>
    </Jumbo>
    </Styles>
)

export default Jumbotron;