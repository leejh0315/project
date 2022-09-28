import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Yeosu() {
    let navigate = useNavigate();
    return (
        <div>
    <Carousel>
        <Carousel.Item>
        <img 
            className="se1"
            src="image/yeosu/image1.jpg"
        />
        <Carousel.Caption>
        <div style={{cursor:"pointer" }}onClick={()=>{
                navigate('/yeosucomp/yeosu1')
            }}>
            <h3>하멜등대</h3><br/>
            <h6>전남 여수시 종화동 458-7</h6>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src='image/yeosu/image2.jpg'
        />

        <Carousel.Caption>
        <div style={{cursor:"pointer" }}onClick={()=>{
                navigate('/yeosucomp/yeosu2')
            }}>
            <h3>오동도</h3><br/>
            <h6>전남 여수시 수정동 산1-11</h6>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
            className="se1"
            src='image/yeosu/image3.jpg'
        />

        <Carousel.Caption>
        <div style={{cursor:"pointer" }}onClick={()=>{
                navigate('/yeosucomp/yeosu3')
            }}>
            <h3>아쿠아플라넷 여수</h3><br/>
            <h6>
            전남 여수시 오동도로 61-11 아쿠아리움</h6>
            </div>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        <Button className='home' onClick={()=>{
            navigate("/main")
        }} variant="secondary">Home</Button>{' '}
    </div>
    );
}

export default Yeosu;