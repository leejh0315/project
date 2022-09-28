import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Yeosu() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name:"하멜등대",
            way:"전남 여수시 종화동 458-7",
            image : "/image/yeosu/image1.jpg"
        },{
            name:"오동도",
            way:"전남 여수시 수정동 산1-11",
            image: "/image/yeosu/image2.jpg"
        },{
            name:"아쿠아 플라넷 여수",
            way:"전남 여수시 오동도로 61-11",
            image: "/image/yeosu/image3.jpg"
        }
    ])
    return (
        <div>
            <Carousel>
                {
                    place.map((data,i)=>{
                        return(
                            <Carousel.Item>
                                <img className="se1" src={process.env.PUBLIC_URL +place[i].image}/>
                                <Carousel.Caption>
                                    <div style={{cursor:"pointer" }}onClick={()=>{
                                            navigate('/yeosucomp/yeosu' + ++i)}}>
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

export default Yeosu;