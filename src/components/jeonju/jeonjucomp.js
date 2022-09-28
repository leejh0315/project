import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Jeonjucomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'jeonju1'){
            return(
                <Jeonju1/>
        )
        }else if(item_id == "jeonju2"){
            return(
                <Jeonju2/>
            )
        }else if(item_id == "jeonju3"){
            return(
                <Jeonju3/>
            )
        }
}

export default Jeonjucomp;

function Jeonju1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/jeonju/image11.jpeg"} alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>전주 한옥마을</h4><br/>
                    <Card.Text>
                    전라북도 전주시 완산구 교동, 풍남동 일대에 위치한 한옥 밀집거리.<br/>
                    전주의 대표적인 관광지로<br/>
                    한옥 건물들과 경기전, 전주향교, 한벽당, 오목대와 이목대, 전동성당 등<br/>
                    오래된 건물들이 있다. 전주시가 관광지로 발돋움할 수 있게 해 준 원동력이며<br/>
                    인근 구도심 일대가 역사문화벨트로 묶여 같이 발전하고 있다.<br/><br/>
                    
                    한복을 대여하는 곳도 인근에 있어,<br/>
                    한옥마을에선 한복을 입은 관광객들도 어렵지 않게 찾아볼 수 있다.<br/><br/>

                    다만 갑자기 전국적으로 유행을 타면서<br/>
                    관광객들을 노리고 한옥마을과 아무 상관없는 길거리 야식,<br/>
                    바게트, 아이스크림, 초코파이, 꼬치류 등을 판매하기 시작해<br/>
                    지나치게 상업화된거 아니냐는 비판도 받았다
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/jeonju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Jeonju2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/jeonju/jeonju12.jpg"} alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>전동성당</h4><br/>
                    <Card.Text>
                    천주교 전주교구의 성당. 전동성당은 사적 제288호 이며,<br/>
                    전동성당 사제관은 전라북도 문화재자료 제178호다.<br/><br/>

                    정식 명칭은 '천주교 전동교회'이다.<br/>
                    전동성당은 기본적인 로마네스크 양식의 주조에,<br/>
                    비잔틴 양식 돔으로 마무리 되어있다.<br/><br/>
                    
                    전주교구의 많은 천주교 신자들이<br/>
                    이 곳에서 혼인성사를 올리기 위해 꽤나 줄서서 기다린다고 한다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/jeonju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Jeonju3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/jeonju/jeonju13.jpg"} alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>전주동물원</h4><br/>
                    <Card.Text>
                    1978년 6월에 개원했으며, 전주시가 운영/관리하고 있다.<br/>
                    총 106종 7백 여마리가 있으며, 에버랜드와 서울대공원 다음으로 큰 규모를 자랑한다.<br/><br/>

                    동물원은 과거 낙후된 모습으로 동물들이 걱정될 정도로 상태가 안 좋았으나,<br/>
                    전주시에서 생태동물원으로 대폭 개선하여<br/>
                    현재는 상당히 좋은 시설과 동물들의 자유, 생태 환경을 제공하고 있다.<br/>
                    과거 모습과 상당히 바뀌었다.<br/><br/>
                    
                    늑대사의 경우 나름 넓은 공간에 수풀과 바위를 두고<br/>
                    관람객은 구름다리로 관람하게 하여 접촉을 최대한 줄이는 식으로<br/>
                    동물들에게 스트레스를 주지 않게 했다.

                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/jeonju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}