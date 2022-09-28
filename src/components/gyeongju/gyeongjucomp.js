import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Gyeongjucomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'gyeongju1'){
            return(
                <Gyeongju1/>
        )
        }else if(item_id == "gyeongju2"){
            return(
                <Gyeongju2/>
            )
        }else if(item_id == "gyeongju3"){
            return(
                <Gyeongju3/>
            )
        }
}

export default Gyeongjucomp;

function Gyeongju1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/gyeongju/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>첨성대</h4><br/>
                    <Card.Text>
                    경상북도 경주시 인왕동에 있는 선덕여왕때 지어진 신라시대의 천문대.<br/>
                    신라 왕궁 터인 반월성의 북서쪽 성곽에서 약 300 m 떨어진 지점에 있다.<br/><br/>

                    국보 제31호이고, 그 원형을 유지하는 것 가운데 현존하는<br/>
                    세계에서 가장 오래된 천문대이다.<br/><br/>

                    한반도 고대 건축물 중 유일하게<br/>
                    후대의 복원이나 재건 없이 창건당시 모습 그대로 보존된 문화재이기도 하다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/gyeongju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Gyeongju2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/gyeongju/image12.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>동궁과월지</h4><br/>
                    <Card.Text>
                    동궁(東宮)과 월지(月池)는 경주시에 위치한 통일신라 시대 궁궐 유적이다.<br/><br/>

                    신라의 별궁으로, 신라의 태자가 사는 곳이었다.<br/>
                    왕이 사는 법궁인 경주 월성과는 북동쪽으로 접해 있으나<br/>
                    현재는 원화로에 의해 갈라져 있다. 또한 황룡사의 남서쪽에 있다.<br/>
                    지금의 국립경주박물관과도 아주 가깝다.<br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    궁궐은 신라 때는 수십 개 전각이 늘어서 있었지만<br/>
                    지금은 1, 3, 5호 건물지 3개만 복원한 상태다.<br/>
                    또한 이곳의 심벌은 월지라는 이름의 인공 호수인데,<br/>
                    사실 궁궐의 이미지보다는 과거 통칭이었던 '안압지'라는,<br/>
                    월지 호수와 누각으로서 훨씬 잘 알려져 있다.<br/><br/>
                    
                    이 인공 호수는 신라 왕궁 안쪽의 친수 구역으로<br/>
                    경복궁의 경회루처럼 풍류와 연회 장소로 만든 곳이다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/gyeongju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Gyeongju3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/gyeongju/image13.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>불국사</h4><br/>
                    <Card.Text>
                    경상북도 경주시 불국로 385 (진현동) 토함산 기슭에 위치한<br/>
                    신라 연간을 기원으로 하는 사찰.<br/><br/>

                    1995년 12월에 토함산 중턱의 암자 석굴암과 공동으로 유네스코 세계문화유산으로 지정되었다.<br/><br/>

                    불국정토를 속세에 건설하겠다는 야심찬 통일신라의 꿈을 드러내는 건축물로,<br/>
                    이름인 불국사는 불국정토에서 유래한 호국 사찰이다.<br/>
                    석굴암도 마찬가지. 황룡사가 거대한 규모로 유명한 절이라면,<br/>
                    불국사는 치밀한 구성의 완성도와 아름다움으로 유명한 절이다.<br/><br/><br/><br/><br/><br/><br/><br/>
                    <p className='text-right'>
                    다만 불국사도 전성기인 신라~고려시대에는<br/>
                    지금의 8배에 달하는 규모의 대사찰이었으며,<br/>
                    세월을 거치면서 파괴되고 복원하는 과정에서 규모가 줄어든 것이다.<br/><br/>
                    
                    오늘날의 불국사는 조선 영조 때 복원된 불국사에 기인한다.
                    </p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/gyeongju")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}

