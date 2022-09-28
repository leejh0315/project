import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Jeju() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name: "성산일출봉",
            way : "제주 서귀포시 성산읍 성산리1",
            image : "/image/jeju/image.jpg"
        },{
            name: "천지연폭포",
            way: "제주 서귀포시 천지동 667-7",
            image: "/image/jeju/image2.jpg"
        },{
            name: "우도",
            way: "제주 제주시 우도면",
            image:"/image/jeju/image3.jpg"
        }
    ]);
    return (
        <div>
            <Carousel>
                {
                place.map((data,i)=>{
                    return(
                        <Carousel.Item>
                                <img className="se1"src={process.env.PUBLIC_URL+place[i].image}/>
                                <Carousel.Caption>
                                    <div style={{cursor:"pointer" }}onClick={()=>{
                                        navigate('/jejucomp/jeju' + ++i)
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

export default Jeju;