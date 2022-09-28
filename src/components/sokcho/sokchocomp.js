import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Sokchocomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'sokcho1'){
            return(
                <Sokcho1/>
        )
        }else if(item_id == "sokcho2"){
            return(
                <Sokcho2/>
            )
        }else if(item_id == "sokcho3"){
            return(
                <Sokcho3/>
            )
        }
}

export default Sokchocomp;

function Sokcho1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/sokcho/image12.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>울산바위</h4><br/>
                    <Card.Text>
                    울산바위에는 전설이 하나 있다.<br/>
                    옥황상제가 금강산을 만들 때,<br/>
                    전국의 멋진 바위란 바위는 다 움직여서 금강산에 갔는데<br/>
                    울산바위는 울산에서 금강산으로 가다가 도중에<br/>
                    이미 금강산 바위 모집은 다 끝났다는 소식을 듣고 당황했다.<br/>
                    그렇다고 설악산까지 왔는데 울산으로 되돌아가면<br/>
                    놀림감이 될 것 같아 할 수 없이 그냥 주저앉았다는 이야기이다.<br/><br/>
                    
                    또는 그 자리가 금강산인 줄 알고 착각해서 눌러앉았다가<br/>
                    그만 그대로 굳어버렸다는 이야기도 있다.

                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/sokcho")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Sokcho3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/sokcho/image13.JPG" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>설악산</h4><br/>
                    <Card.Text>
                    태백산맥에 위치한 강원도의 명산.<br/>
                    속초시와 양양군·고성군·인제군에 걸쳐있다.<br/>
                    높이는 1,708m. 남한에서 한라산, 지리산 다음으로 세 번째로 높은 산이다.<br/><br/>

                    1970년 3월 24일 지정된 5번째 국립공원이다. 국립공원 총면적은 398.222km²이다.<br/><br/>

                    6.25 전쟁이 일어나기 전에는 북한에 속했지만,<br/>
                    휴전선이 그어지면서 대한민국이 수복한 지역.<br/>
                    지리산에서 백두산까지 이어지는 한반도의 거대한 산줄기인<br/>
                    백두대간의 척추 부분에 금강산과 약간 떨어진 채 있다.<br/>
                    하필이면 척추 부분에 아름다운 두 산이 있고<br/>
                    두 산의 중간쯤에 휴전선이 지난다.<br/><br/>
                    
                    한국전쟁 때 국군이 여기가 금강산인줄 알고 더 진격을 안했다는 농담도 있다.<br/>
                    그런데 금강산 문서를 보면 알겠지만 금강산과 설악산은 본래 같은 산인데 구분한 것이다.

                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/sokcho")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Sokcho2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/sokcho/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>속초아이 대관람차</h4><br/>
                    <Card.Text>
                    속초아이는 국내 유일하게 해변에 위치한 대관람차로,<br/>
                    약 65m높이의 6인용 36개 캐빈(탑승물)이 장착되어<br/>
                    최대 216명의 인원이 탑승 가능하며<br/>
                    대한민국에서 유일하게 캐빈에 자동문이 설치되어<br/>
                    누구나 편리하게 이용할 수 있다.<br/><br/>


                    한바퀴 회전하는데 15분 정도 소요되며,<br/>
                    쾌적하고 넓은 실내를 가진 36개의 캐빈에 에어컨 등 편의기기가 설치되어 있다.<br/><br/>

                    푸른 동해 바다와 설악산, 속초시의 전경을 한눈에 감상할 수 있으며,<br/>
                    야간에는 30여가지 LED퍼포먼스를 통해<br/>
                    관광객들에게 다양한 볼거리를 선사한다.

                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/sokcho")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}