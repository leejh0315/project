import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import suimage1 from './../image/seoul/suimage1.jpg';
import suimage2 from './../image/seoul/suimage2.jpg';
import suimage3 from './../image/seoul/suimage3.jpg';

function Seoul() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={suimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={suimage2}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={suimage3}
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

export default Seoul;