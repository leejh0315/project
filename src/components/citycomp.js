// import Carousel from 'react-bootstrap/Carousel';
// import {React} from 'react';
// import {useNavigate} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';

// function Busan() {
//     let navigate = useNavigate();
//     let [place, setPlace] = useState([
//         {
//             name: "해운대 해수욕장",
//             way: "부산광역시 해운대구 우동",
//             image: "/image/busan/image1.jpg",
//             navigate : '/busancomp/busan1' 
//         },{
//             name: "흰여울 문화마을",
//             way: "부산광역시 영도구 영선동 4가",
//             image: "/image/busan/image2.jpg",
//             navigate : '/busancomp/busan2' 
//         },{
//             name: "해동 용궁사",
//             way: "부산광역시 기장군 기장읍 용궁길 86",
//             image: "/image/busan/image3.jpg",
//             navigate : '/busancomp/busan3' 
//         }
//     ],[
//         {
//             name: "독립기념관",
//             way:"충청남도 천안시 동남구 목천읍 독립기념관로",
//             image:"image/cheonan/image1.jpg",
//             navigate : '/cheonancomp/cheonan1'
//         },
//         {
//             name: "천호지",
//             way: "충남 천안시 동남구 안서동 526-1",
//             image: "image/cheonan/image2.jpg",
//             navigate : '/cheonancomp/cheonan2'
//         },
//         {
//             name: "유관순 열사 기념관",
//             way: "충청남도 천안시 동남구 병천면 유관순길 38",
//             image: "image/cheonan/caimage4.jpg",
//             navigate : '/cheonancomp/cheonan3'
//         }
//     ]);
//     return (
//         <div>
//             <Carousel>
//                 {
//                     place.map((data,i)=>{
//                         return(
//                             <Carousel.Item>
//                                 <img className="se1" src={place[0].image}/>
//                                 <Carousel.Caption>
//                                     <div style={{cursor:"pointer" }}onClick={()=>{
//                                         navigate()}}>
//                                         <h3>{place[i].name}</h3><br/>
//                                         <h6>{place[i].way}</h6>
//                                     </div>
//                                 </Carousel.Caption>
//                             </Carousel.Item>
//                         )
//                     })
//                 }
//             </Carousel>
//             <Button className='home' onClick={()=>{
//                 navigate("/main")
//             }} variant="secondary">Home</Button>{' '}
//         </div>
//     );
// }

// export default Busan;