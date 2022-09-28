import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Pyeongchang() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name:"대관령 양떼목장",
            way:"강원 평창군 대관령면 대관령마루길 483-32",
            image:"/image/pyeongchang/image1.jpg"
        },{
            name:"봉평 메밀밭",
            way:"강원 평창군 봉평면 창동리 707-2",
            image:"/image/pyeongchang/image2.jpg"
        },{
            name:"발왕산 스카이워크",
            way:"강원 평창군 올림픽로 715",
            image:"/image/pyeongchang/image3.jpg"
        }
    ])
    return (
        <div>
            <Carousel>
                {
                    place.map((data,i) =>{
                        return(
                            <Carousel.Item>
                                <img className="se1" src= {process.env.PUBLIC_URL+place[i].image}/>
                                <Carousel.Caption>
                                    <div style={{cursor:"pointer" }}onClick={()=>{
                                    navigate('/pyeongchangcomp/pyeongchang' + ++i)}}>
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

export default Pyeongchang;