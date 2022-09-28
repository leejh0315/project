import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Yeosucomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'yeosu1'){
            return(
                <Yeosu1/>
        )
        }else if(item_id == "yeosu2"){
            return(
                <Yeosu2/>
            )
        }else if(item_id == "yeosu3"){
            return(
                <Yeosu3/>
            )
        }
}
export default Yeosucomp;

function Yeosu1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/yeosu/image11.jpg"} alt="Card image"  className='detail' />
                <Card.ImgOverlay>
                    <h4>하멜등대</h4><br/>
                    <Card.Text>
                        여수구항에 조성된 하멜 수변공원의 방파제 끄트머리에 있는 무인등대로,<br/>
                        광양항과 여수항을 오가는 선박을 위한 시설이다.<br/>
                        《하멜표류기》로 유명한 네덜란드인 헨드릭 하멜(Hendrick Hamel)이<br/>
                        여수 지역에 머물렀던 것을 기리기 위하여<br/>
                        국제로타리클럽이 추진한 하멜 기념사업의 일환으로 2004년 12월 23일 건립되었다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/yeosu")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Yeosu2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/yeosu/image12.jpg"} alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>오동도</h4><br/>
                    <Card.Text>
                        전라남도 여수시 한려동에 위치한 섬.<br/>
                        한려해상국립공원의 시작점이다.<br/>
                        본래 여수항 동쪽에 있는 섬이었으나 일제강점기인 1935년<br/>
                        축조한 길이 768m의 방파제로 육지와 이어져 있다.<br/>면적은 약 0.12㎢.<br/><br/>

                        <p className='text-right'>
                        섬의 이름은 오동나무에서 유래했는데,<br/>
                        섬의 모양이 오동나무 잎을 닮았고,<br/>
                        섬에 오동나무가 울창한 숲을 이루고 있었다고 한다.<br/>
                        고려 말 신돈이 오동나무 숲은 왕조에 불길하다고 주장하여<br/>
                        오동나무들을 모두 베어버렸다는 전설이 있다.
                        </p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
            navigate("/yeosu")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Yeosu3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={process.env.PUBLIC_URL+"/image/yeosu/image13.jpg"} alt="Card image"  className='detail'/>
                <Card.ImgOverlay style={{textAlign:'right'}}>
                    <h4>아쿠아플라넷 여수</h4><br/>
                    <Card.Text>
                        <br/><br/><br/><br/>
                        여수세계박람회장 내부에 위치한 거대한 아쿠아리움.<br/>
                        총 6,030톤의 수조, 300종 34,000마리의 수중동물들을 보유하고 있는 시설이다.<br/>
                        세계에서 두 번째로, 아시아에서는 가장 큰 규모의 돔형 아쿠아리움.<br/>
                        63 씨월드의 약 5배가 조금 넘는 규모로,<br/>
                        수도권에서의 아쿠아리움 중 가장 큰 아쿠아플라넷 일산보다도 약간 더 크다.<br/><br/>
                        
                        2012년 5월 12일 2012 여수 엑스포 개막에 맞추어 개장했으며,<br/>
                        여수엑스포 당시 엑스포 부속시설이었다.<br/>
                        한화 아쿠아플라넷 수족관 중에서는,<br/>
                        아쿠아플라넷 63에 이어 두 번째로 개장했다.<br/><br/>

                        대한민국에서 흰돌고래를 보유한 단 셋뿐인 아쿠아리움 중 하나.<br/>
                        그래서인지 로고에도 흰돌고래가 들어가있으며,<br/>
                        홍보할 때도 전시 중인 흰돌고래를 가장 주력으로 세운다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/yeosu")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
