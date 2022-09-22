import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ysimage1 from './../image/yeosu/ysimage1.jpg';
import ysimage2 from './../image/yeosu/ysimage2.jpg';
import ysimage3 from './../image/yeosu/ysimage3.jpg';

function Yeosu() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={ysimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={ysimage2}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={ysimage3}
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
    );
}

export default Yeosu;