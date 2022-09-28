import Carousel from 'react-bootstrap/Carousel';
import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Seoul() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name:"남산타워",
            way:"서울 용산구 남산공원길 105",
            image: "/image/seoul/image1.jpg"
        },
        {
            name: "경복궁",
            way:"서울 종로구 사직로 161",
            image: "/image/seoul/image2.jpg"
        },
        {
            name: "여의도 한강공원",
            way: "서울 영등포구 여의동로 330",
            image: "/image/seoul/image3.jpg"
        }
    ]);
    return (
        <div>
            <Carousel>
                {
                    place.map((data,i)=>{
                        return(
                            <Carousel.Item>
                                <img className="se1" src={place[i].image}/>
                                <Carousel.Caption>
                                <div style={{cursor:"pointer" }}onClick={()=>{
                                    navigate('/seoulcomp/seoul' + ++i)}}>
                                    <h3>{place[i].name}</h3><br/>
                                    <h6>{place[i].way}</h6>    
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                    )
                }
            </Carousel>
            <Button className='home' onClick={()=>{
                navigate("/main")
            }} variant="secondary">Home</Button>{' '}
        </div>
    )
}
export default Seoul;
