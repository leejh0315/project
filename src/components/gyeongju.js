import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Gyeongju() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name: "첨성대",
            way: "경북 경주시 인왕동 839-1",
            image: "/image/gyeongju/gyeongju1.png"
        },
        {
            name: "동궁과월지",
            way: "경북 경주시 원화로 102 안압지",
            image: "/image/gyeongju/gyeongju2.png"
        },
        {
            name: "불국사",
            way: "경북 경주시 불국로 385 불국사",
            image: "/image/gyeongju/gyeongju3.jpg"
        }
    ]);
    return (
        <div>
            <Carousel>
                {
                    place.map((data,i)=>{
                        return(
                            <Carousel.Item>
                                <img className="se1" src={process.env.PUBLIC_URL+place[i].image}/> 
                                <Carousel.Caption>
                                <div style={{cursor:"pointer" }}onClick={()=>{
                                    navigate('/gyeongjucomp/gyeongju' + ++i)
                                }}>
                                        <h3>{place[i].name}</h3><br/>
                                        <h6>{place[i].way}</h6>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <Button className='home' onClick={()=>{
                    navigate("/main")
                }} variant="secondary">Home</Button>{' '}
        </div>
    );
}

export default Gyeongju;