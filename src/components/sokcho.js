import Carousel from 'react-bootstrap/Carousel';
import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Sokcho() {
    let navigate = useNavigate();
    let [place, setPlace] = useState([
        {
            name:"울산바위",
            way:"강원 속초시 설악산로 1091",
            image: "/image/sokcho/image1.jpg"
        },
        {
            name: "속초아이 대관람차",
            way:"강원 속초시 청호해안길 2 속초아이",
            image: "/image/sokcho/image2.jpg"
        },
        {
            name: "설악산",
            way: "강원 속초시 설악산로 1085",
            image: "/image/sokcho/image3.jpg"
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
                                    navigate('/sokchocomp/sokcho' + ++i)}}>
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
export default Sokcho;
