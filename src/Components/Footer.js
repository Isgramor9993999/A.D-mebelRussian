import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div ` 
    a{
        color: #fff;
    }
`

const Footer = () => (
    <Styles>
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff'}}>
        <Container style={{ display:'flex', justifyContent:'center', padding: '10px'}}>
            <p>A.D-Мебель России</p>
            <p>+7 937 910 83 00</p>
            <a href="https://www.instagram.com/a.d_mebel_russian/">Instagram</a>
        </Container>
    </Container>
    </Styles>   
)
export default Footer; 