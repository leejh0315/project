import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import pcimage1 from './../image/pyeongchang/pcimage1.jpg';
import pcimage2 from './../image/pyeongchang/pcimage2.jpg';
import pcimage3 from './../image/pyeongchang/pcimage3.jpg';

function Pyeongchang() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={pcimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={pcimage2}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={pcimage3}
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

export default Pyeongchang;