import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import bsimage1 from './../image/busan/bsimage1.jpg';
// import bsimage2 from './../image/busan/bsimage2.jpg';
import bsimage3 from './../image/busan/bsimage3.jpg';

function Busan() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={bsimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={bsimage1}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={bsimage3}
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

export default Busan;