import Carousel from 'react-bootstrap/Carousel';
import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Busan() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name: "해운대 해수욕장",
            way: "부산광역시 해운대구 우동",
            image: "/image/busan/image1.jpg"
        },{
            name: "흰여울 문화마을",
            way: "부산광역시 영도구 영선동 4가",
            image: "/image/busan/image2.JPG"
        },{
            name: "해동 용궁사",
            way: "부산광역시 기장군 기장읍 용궁길 86",
            image: "/image/busan/image3.jpg"
        }
    ]);
    return (
        <div>
            <Carousel>
                {
                    place.map((data,i)=>{
                        return(
                            <Carousel.Item>
                                <img className="se1" src={process.env.PUBLIC_URL + place[i].image}/>
                                <Carousel.Caption>
                                    <div style={{cursor:"pointer" }}onClick={()=>{
                                        navigate('/busancomp/busan' + ++i)}}>
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

export default Busan;