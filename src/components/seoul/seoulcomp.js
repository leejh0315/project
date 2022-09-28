import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Seoulcomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'seoul1'){
            return(
                <Seoul1/>
        )
        }else if(item_id == "seoul2"){
            return(
                <Seoul2/>
            )
        }else if(item_id == "seoul3"){
            return(
                <Seoul3/>
            )
        }
}

export default Seoulcomp;

function Seoul1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/seoul/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>서울 남산 타워</h4><br/>
                    <Card.Text className='text'>
                        서울특별시 남산에 있는 송신탑이자 서울을 대표하는 랜드마크이다.<br/>
                        정식 명칭은 남산서울타워이며 보통은 남산타워로 불리는 편이다.<br/><br/>
                        
                        CJ푸드빌에서 일부 층을 임대하여 운영하는 전망대 및 복합문화공간의 이름인<br/>
                        N서울타워로 불리는 경우도 많다.<br/><br/>
                        1975년 7월 30일에 준공되었다. 이 타워가 지어지기 전에는 여러 개의 방송용 송신탑이 있었고, <br/>
                        서울 주변의 각지에도 방송용 송신탑이 난립해 있었다.<br/><br/>

                        1970년대 이 송신탑을 정리하고 통합하는 정책이 추진되면서 동양방송과 동아방송, 문화방송이 투자하여<br/>
                        남산에 높은 타워를 세워 수도권 거점 송신소의 기능을 하게 되었다.<br/><br/>
                    
                        완공 후 체신부에서 소유하고 있다가 체신공제조합으로 넘어갔다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/seoul")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Seoul2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/seoul/image12.jpg" alt="Card image" className='detail'/>
                <Card.ImgOverlay>
                    <h4>경복궁</h4><br/>
                    <Card.Text className='text'>
                        원래는 신진사대부가 계획한 궁궐이기 때문에<br/>
                        '검이불루 화이불치'(검소하되 누추하지 않고 화려하되 사치스럽지 않다.)<br/>
                        라는 유교 이념을 반영하여 이전 왕조들의 궁궐에 비해 <br/>
                        화려한 장식 없이 수수하고 검소한 형태로 지어졌었다.<br/>
                        배치는 유교적인 관점에 따라 삼문삼조의 형태로 되어 있었다.
                        <br/><br/>
                        임진왜란 전 조선 전기 동안 조선 왕조의 법궁으로 중요한 역할을 담당했다.<br/>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/seoul")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Seoul3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/seoul/image13.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>여의도 한강공원</h4><br/>
                    <Card.Text className='text'>
                        여의도 강변에 위치해 있는 한강공원.<br/>
                        서울의 3대 도심 중 두 곳인 한양도성과 여의도와 인접하고<br/>
                        다른 한강공원들보다 접근성도 편리하기에<br/>
                        한강공원 중 방문자가 압도적으로 제일 많다.<br/><br/>

                        영등포 여의도 봄꽃축제와 서울세계불꽃축제가<br/>
                        이곳에서 매년 개최된다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/seoul")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}