import React from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

function Cheonancomp(){
    let {item_id} = useParams();
    let navigate = useNavigate();
        
        if(item_id == 'cheonan1'){
            return(
                <Cheonan1/>
        )
        }else if(item_id == "cheonan2"){
            return(
                <Cheonan2/>
            )
        }else if(item_id == "cheonan3"){
            return(
                <Cheonan3/>
            )
        }
}

export default Cheonancomp;

function Cheonan1() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/cheonan/image11.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>독립기념관</h4><br/>
                    <Card.Text className='dok'>
                        대한민국의 박물관.<br/>
                        이를 운영하는 국가보훈처 산하 공공기관(준정부기관) 역시 '독립기념관'이다.<br/>
                        겨레의 탑과 불굴의 한국인 상이 박물관의 상징이며,<br/>
                        이 박물관이 바로 천안시의 랜드마크이다.<br/>
                        일제강점기의 수난과 나라를 되찾기 위해 싸운 독립 운동이 주요 주제이다.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card><br/>
            <Button className='home' onClick={()=>{
                navigate("/cheonan")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Cheonan2() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="/image/cheonan/image12.jpg" alt="Card image" className='detail' />
                <Card.ImgOverlay>
                    <h4>천호지</h4><br/>
                    <Card.Text>
                        단국대학교 학생들과 인근 주민들은 흔히 단대호수또는 안서호라고 부른다.
                        단대호수라는 명칭으로 불리는 가장 유명한 사례가
                        바로 버스커 버스커 1집 수록곡인 '꽃송이가'의 가사이다.<br/><br/>
                        인근에 4개의 대학교가 밀집해 있기도 하고,
                        2008년에 호수 가장자리로 걸을 수 있는 생활체육공원이 완공되면서부터
                        연인들이 즐겨찾는 데이트 코스로 각광받고 있다.<br/>
                        특히 봄철에는 호수 주위를 벚나무가 두르고 있기 때문에 벚꽃 경관이 아주 으뜸이다.<br/>
                        
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/cheonan")
                }} variant="secondary">Back</Button>{' '}
        </div>
    );
}
function Cheonan3() {
    let navigate = useNavigate();
    return (
        <div>
            <Card className="bg-dark text-white, yoo">
                <Card.Img src="/image/cheonan/image13.jpg" alt="Card image" className='detail'/>
                <Card.ImgOverlay>
                    <h4>유관순 열사 기념관</h4><br/>
                    <Card.Text >
                        전시실은 관람 순서에 따라 아우내 독립만세운동 부조,<br/>
                        연보, 유관순 열사의 생애, 국내외 3·1운동, 끌려	가는 유관순 (모형재현),<br/>
                        서대문 경찰서 벽관 체험, 독립이미지, 재판 과정과 옥중투쟁 매직비전 영상, <br/>
                        유관순 열사 관련 자료, 천안의 독립운동, 열사의 삶과 죽음 이야기로 이루어져있다.<br/> 
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <br/>
            <Button className='home' onClick={()=>{
                navigate("/cheonan")
                }} variant="secondary">Back</Button>{' '}
        </div>
        );
}

