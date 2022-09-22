import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import jjimage1 from './../image/jeju/jjimage1.jpg';
import jjimage2 from './../image/jeju/jjimage2.jpg';
import jjimage3 from './../image/jeju/jjimage3.jpg';

function Jeju() {
    return (
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src={jjimage1}
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={jjimage2}
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src={jjimage3}
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

export default Jeju;