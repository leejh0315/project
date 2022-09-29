import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

//파라미터를 어떻게 넣을건지 지정
//자바 스크립트 안에 중괄호.
//HTML내부에 중괄호는 자바스크립트 영역

function Busancomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'busan1'){
            return(
                <Busan1/>
        )
        }else if(item_id == "busan2"){
            return(
                <Busan2/>
            )
        }else if(item_id == "busan3"){
            return(
                <Busan3/>
            )
        }
}
export default Busancomp;

function Busan1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src= {process.env.PUBLIC_URL+"/image/busan/image11.jpg"} alt="Card image" className='detail' />
                <Card.ImgOverlay className='text-right'>
                    <h4>해운대 해수욕장</h4><br/>
                    <Card.Text>
                    도심에 위치한 해수욕장<br/>
                    국내 여름 휴가철 여행지 1순위<br/>
                    외국인 관광객도 많이 방문함<br/><br/>

                    해운대라는 이름 : 통일신라의 문인 최치원이<br/>
                    소나무와 백사장이 어우러진 이곳의 경치에 감탄해<br/>
                    자신의 호인 해운(海雲)에서 	따서 붙인 것<br/>
                    조선팔경 중 하나로 꼽히기도 했음.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/busan")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Busan2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/busan/image12.jpg" }alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>흰여울 문화마을</h4><br/>
                    <Card.Text>
                    과거에는 달동네 이미지였지만 무한도전이나 변호인,<br/>
                    범죄와의전쟁: 나쁜놈들 전성시대, 첫사랑 사수 궐기대회 등을<br/>
                    여기서	촬영하면서 이 마을의 존재가 알려지게 되었고<br/>
                    외지인들이 공폐가를 매입해 아틀리에나 카페를 조성하면서<br/>
                    일찌감치 유명세를 탄 감천2동 태극도마을처럼 차츰 관광지화되기 시작했다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/busan")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Busan3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/busan/image13.jpg"} alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>해동 용궁사</h4><br/>
                    <Card.Text>
                    보통 산 속에 있는 일반적인 사찰과 달리<br/>
                    탁 트인 동해를 마주하고 있어 관광지로 유명하다.<br/>
                    주말과 휴가 시즌에는 외국인을 포함, 외지발 방문객들이<br/>
                    상당히 많이 찾아오는 절이며 시티투어버스 해운대 노선도 이 곳을 경유한다.<br/><br/>
                    오랜 역사의 범어사, 규모의 삼광	사와 더불어<br/>
                    아름다운 경치로 인해 부산에서 가장 이름난 절이다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/busan")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}