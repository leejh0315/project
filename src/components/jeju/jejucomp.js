import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Jejucomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'jeju1'){
            return(
                <Jeju1/>
        )
        }else if(item_id == "jeju2"){
            return(
                <Jeju2/>
            )
        }else if(item_id == "jeju3"){
            return(
                <Jeju3/>
            )
        }
}
export default Jejucomp;

function Jeju1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/jeju/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>성산일출봉</h4><br/>
                    <Card.Text className='text'>
                        제주도가 만들어진 시기인 신생대 제4기 플라이스토세에<br/>
                        단성화산인 오름과는 달리 유일하게 현무암질 마그마가<br/>
                        얕은 바닷속에서 분출하여 만들어진<br/>
                        수성화산의 일종인 응회구이자 섯시형화산체이다.<br/><br/>

                        신증동국여지승람과 탐라지를 비롯한<br/>
                        1960년대까지 대부분 문헌에서 성산이라고 표기해왔다
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/jeju")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}
function Jeju2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/jeju/image12.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>천지연폭포</h4><br/>
                    <Card.Text className='text'>
                        천지연폭포는 서귀포시 천지동에 위치해 있다.<br/>
                        지리적으론 바닷가와 가깝지만, 정방폭포와 달리<br/>
                        바다로 직접 흐르지 않고 하천을 이루면서 바다로 흐른다.<br/><br/>

                        천지연폭포에 위치한 천지연은 자연물들의 식생이 잘 보존된 지역으로,<br/>
                        여기에 관련된 천연기념물이 3개나 존재한다.<br/>
                        첫째로는 무태장어가 자연적으로 서식하고 있는데,<br/>
                        천지연의 무태장어 서식지는 천연기념물로 지정되어 있다.<br/>
                        또한 난대림에서 자라는 종인 담팔수나무가 자생하고 있어서<br/>
                        천연기념물 제163호 제주 천지연 담팔수 자생지로도 지정되어 있으며,<br/>
                        천지연 일대에는 난대림이 자연적으로 잘 조성되어 있어서<br/>
                        이 일대를 천연기념물 제379호<br/>
                        제주 천지연 난대림으로 지정하여 보호하고 있다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/jeju")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}
function Jeju3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/jeju/image13.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4 className='text'>우도</h4><br/>
                    <Card.Text className='text'>
                        제주특별자치도에 소속되어 있는 부속도들 중 1곳이자<br/>
                        제주특별자치도의 최동단.<br/><br/>

                        제주도에서는 본섬인 제주도를 제외하면<br/>
                        가장 넓다(6.18제곱킬로미터).<br/><br/>
                        
                        명칭은 소(牛)가 옆으로 누워있는 모습과 닮았다고 해서<br/>
                        우도(牛島)로 붙였다고 전한다.<br/>
                        바다 쪽에서 우도봉 쪽을 바라보면<br/>
                        소(牛)가 옆으로 누워 있는 모습과 같다고 한다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/jeju")
            }} variant="secondary">Back</Button>{' '}
        </div>
    );
}