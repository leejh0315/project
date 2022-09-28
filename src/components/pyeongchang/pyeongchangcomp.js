import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Pyeongchangcomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'pyeongchang1'){
            return(
                <Pyeongchang1/>
        )
        }else if(item_id == "pyeongchang2"){
            return(
                <Pyeongchang2/>
            )
        }else if(item_id == "pyeongchang3"){
            return(
                <Pyeongchang3/>
            )
        }
}

export default Pyeongchangcomp;

function Pyeongchang1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/pyeongchang/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>대관령 양떼목장</h4><br/>
                    <Card.Text className='text'>
                    대관령(大關嶺)은 강원도 강릉시와 평창군을 잇는<br/>
                    높이 832 m의 고개로, 태백산맥의 주요 고개이다.<br/><br/>
                    
                    영서와 영동을 나누는 분수령이기도 하다.<br/>
                    대관령이라는 이름은 삼국사기에 명주의 김순식이 왕건한테 저항하다<br/>
                    928년 왕건이 대관령을 넘어 김순식을 직접 찾아보고 귀부를 설득했다는 내용으로<br/>
                    처음 한국사에 등장한다.

                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/pyeongchang")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}
function Pyeongchang2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/pyeongchang/image12.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>봉평 메밀밭</h4><br/>
                    <Card.Text className='textcolor'>
                        이효석 선생의 고향이자 그의 대표작 메밀꽃 필 무렵의 배경인 봉평은
                        매년 9월이면 소금처럼 흩뿌려진 하얀 메밀꽃으로 장관을 이룬다. 
                        프로그램은 시골장터와 농특산물판매로 장터분위기를 조성<br/><br/>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/pyeongchang")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}
function Pyeongchang3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/pyeongchang/image13.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>발왕산 스카이워크</h4><br/>
                    <Card.Text className='text'>
                        높이 1,458 m. 태백산맥의 줄기인 중앙산맥에 딸린 산으로,<br/>
                        주위에 고루포기산(1,238 m) ·옥녀봉(玉女峰:1,146 m) ·두루봉(1,226 m) 등이 솟아 있다.<br/><br/>
                        <p className='text-right'>
                        동쪽 계곡에는 송천(松川)이 심하게 곡류하며 남쪽으로 흐르고,<br/>
                        남서쪽 비탈면에서는 봉산천(鳳山川)이 발원한다.<br/>
                        정상 일대에는 주목과 산철쭉이 자라고,<br/>
                        북동쪽 횡계리(橫溪里)의 고위 평탄면에서는<br/>
                        고랭지채소 재배 및 목축이 이루어진다.<br/>
                        북쪽의 경사가 완만한 용산리(龍山里) 일대에는<br/>
                        용평스키장이 조성되어 있고,<br/>
                        동서방향으로 지나는 영동고속국도와 연결된다.<br/>
                        </p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/pyeongchang")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}
