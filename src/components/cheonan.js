import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Cheonan() {
    let navigate = useNavigate();
    let [place, setplace] = useState([
        {
            name: "독립기념관",
            way:"충청남도 천안시 동남구 목천읍 독립기념관로",
            image:"image/cheonan/image1.jpg"
        },
        {
            name: "천호지",
            way: "충남 천안시 동남구 안서동 526-1",
            image: "image/cheonan/image2.jpg"
        },
        {
            name: "유관순 열사 기념관",
            way: "충청남도 천안시 동남구 병천면 유관순길 38",
            image: "image/cheonan/caimage4.jpg"
        }
    ])
    //배열에서 i번째 인덱스에 접근할때 어떻게 해야하는가?
    // place = [{},{},{}]
    return (
        <div>
            <Carousel>
            {
                place.map(function(data,i){
                    return(
                        <Carousel.Item>
                            <img className="se1" src={place[i].image}/>
                            <Carousel.Caption>
                                <div style={{cursor:"pointer" }}onClick={()=>{
                                    navigate('/cheonancomp/cheonan' + ++i)
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
    )
}
    export default Cheonan;