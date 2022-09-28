import Carousel from 'react-bootstrap/Carousel';
import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Jeonju() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name: "전주 한옥마을",
            way: "전북 전주시 완산구 기린대로 99",
            image: "/image/jeonju/jeonju1.jpg"
        },{
            name: "전주 전동성당",
            way: "전북 전주시 완산구 태조로 51",
            image: "/image/jeonju/jeonju2.jpeg"
        },{
            name: "전주 동물원",
            way: "전북 전주시 덕진구 소리로 68 전주동물원",
            image: "/image/jeonju/jeonju3.jpg"
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
                                        navigate('/jeonjucomp/jeonju' + ++i)}}>
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

export default Jeonju;