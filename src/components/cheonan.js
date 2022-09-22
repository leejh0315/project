import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import caimage1 from './../image/cheonan/caimage1.jpg';
import caimage2 from './../image/cheonan/caimage2.jpg';
import caimage3 from './../image/cheonan/caimage3.jpg';



function Cheonan() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={caimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={caimage2}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={caimage3}
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

export default Cheonan;