import React from 'react';
import favicon from './img/favicon.png'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div ` 
    a{
        color: #000;
    }
`

export const About = () => (
    <Styles>
        <Container>
            <img src={favicon}/>
            <p>A.D- это команда людей которая предоставояет только качественую мебель по России!
                Связаться можно по номеру телефона или Instagram           
            </p>
            <span>
                <h4>Среди разнообразия товаров и условий мы бы хотели выразить основные преимущества нашего интернет магазина.</h4>
                <ul>
                    <li>Приятные и честные цены!</li>
                    <li>Возможность доставки товаров в любой уголок нашей страны</li>
                    <li>Мы осуществляем возврат продукции в течении 7 дней с момента доставки товара</li>
                    <li>Собственная курьерская служба</li>
                    <li>Гарантия на товары от 12 месяцев на мебель и 18 месяцев на матрасы </li>
                    <li>Грамотная консультация наших менеджеров</li>
                    <li>Прозрачный расчет стоимости доставки в другие города</li>
                </ul>
                <h5>Отдельно хотелось бы выделить наших менеджеров. Мы хорошо знаем свой ассортимент и всегда сможем предложить Вам оптимальные условия! </h5>
            </span>
            <a href="https://www.instagram.com/a.d_mebel_russian/"><h4>+7 937 910 83 00</h4><h4>Instagram</h4></a>
        </Container>
    </Styles>
    
)