import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap"
import { useState } from 'react';
import suimage1 from './../image/seoul/suimage1.jpg';
import suimage2 from './../image/seoul/suimage2.jpg';
import suimage3 from './../image/seoul/suimage3.jpg';
import caimage1 from './../image/cheonan/caimage1.jpg';
import caimage2 from './../image/cheonan/caimage2.jpg';
import caimage3 from './../image/cheonan/caimage3.jpg';
import ysimage1 from './../image/yeosu/ysimage1.jpg';
import ysimage2 from './../image/yeosu/ysimage2.jpg';
import ysimage3 from './../image/yeosu/ysimage3.jpg';
import jjimage1 from './../image/jeju/jjimage1.jpg';
import jjimage2 from './../image/jeju/jjimage2.jpg';
import jjimage3 from './../image/jeju/jjimage3.jpg';
import bsimage1 from './../image/busan/bsimage1.jpg';
// import bsimage2 from './../image/busan/bsimage2.jpg';
import bsimage3 from './../image/busan/bsimage3.jpg';
import pcimage1 from './../image/pyeongchang/pcimage1.jpg';
import pcimage2 from './../image/pyeongchang/pcimage2.jpg';
import pcimage3 from './../image/pyeongchang/pcimage3.jpg';
import {useNavigate} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main({isShow, setIsShow}){
    return(
        <div class="bgMap">
        <Button className='su' variant="secondary"
        onClick={()=>{
            let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
            temp[0] = !temp[0]   //temp의 0번 인덱스에, 0번  인덱스의 반대가 되는 불린값을 넣어줌
            setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>서울</Button>{' '}
        <Button className='ca' variant="secondary"
        onClick={()=>{
            let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
            temp[1] = !temp[1]   //temp의 1번 인덱스에, 1번  인덱스의 반대가 되는 불린값을 넣어줌
            setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>천안</Button>{' '}
        <Button className='ys' variant="secondary"
        onClick={()=>{
          let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
          temp[2] = !temp[2]   //temp의 2번 인덱스에, 2번  인덱스의 반대가 되는 불린값을 넣어줌
          setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>여수</Button>{' '}
        <Button className='jj' variant="secondary"
        onClick={()=>{
          let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
          temp[3] = !temp[3]   //temp의 3번 인덱스에, 3번  인덱스의 반대가 되는 불린값을 넣어줌
          setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>제주</Button>{' '}
        <Button className='bs' variant="secondary"
        onClick={()=>{
          let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
          temp[4] = !temp[4]   //temp의 4번 인덱스에, 4번  인덱스의 반대가 되는 불린값을 넣어줌
          setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>부산</Button>{' '}
        <Button className='pc' variant="secondary"
        onClick={()=>{
          let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
          temp[5] = !temp[5]   //temp의 5번 인덱스에, 5번  인덱스의 반대가 되는 불린값을 넣어줌
          setIsShow(temp) //temp를 setIsShow에 집어 넣음
        }}>평창</Button>{' '}
          {/* <Route path = "/seoul1" element = {<UncontrolledExample/>}></Route> */}

        <BtnImg1 isShow={isShow[0]}></BtnImg1>
        <BtnImg2 isShow={isShow[1]}></BtnImg2>
        <BtnImg3 isShow={isShow[2]}></BtnImg3>
        <BtnImg4 isShow={isShow[3]}></BtnImg4>
        <BtnImg5 isShow={isShow[4]}></BtnImg5>
        <BtnImg6 isShow={isShow[5]}></BtnImg6>
    </div>
    )
}
function BtnImg1(props){ //function은 return을 만나면 끝나버림
    let navigate = useNavigate();
    if(props.isShow == true){
        return(
        <div className='bgc'>
            <img className='seoul1' src={suimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/seoul")
            }}></img>        
            <img className='seoul2' src={suimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/seoul")
            
            }}></img>
            <img className='seoul3' src={suimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/seoul")
            
            }}></img>
        </div>
        )
    }
    else if(props.isShow == false){
        return(
            <div></div>
        )
    }
}
    function BtnImg2(props){ //function은 return을 만나면 끝나버림
    let navigate = useNavigate();

        if(props.isShow == true){
        return(
            <div>
            <img className='cheonan1' src={caimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/cheonan")
            
            }}></img>
            <img className='cheonan2' src={caimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/cheonan")
            
            }}></img>
            <img className='cheonan3' src={caimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/cheonan")
            
            }}></img>
            </div>
        )
        }
        else if(props.isShow == false){
            return(
                <div>
                </div>
            )
        }
    }
    function BtnImg3(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
            return(
            <div>
            <img className='yeosu1' src={ysimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/yeosu")
            
        }}></img>
            <img className='yeosu2' src={ysimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/yeosu")
            
            }}></img>
            <img className='yeosu3' src={ysimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/yeosu")
            
        }}></img>

            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        }
    }
    function BtnImg4(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
        return(
            <div>
            <img className='jeju1' src={jjimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/jeju")
            
            }}></img>
            <img className='jeju2' src={jjimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/jeju")
            
            }}></img>
            <img className='jeju3' src={jjimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/jeju")
            
            }}></img>
            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        }
    }
    function BtnImg5(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();

        if(props.isShow == true){
        return(
            <div>
            <img className='busan1' src={bsimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/busan")
            
            }}></img>
            {/* <img className='busan2' src={bsimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/busan")
            
          }}></img> */}
            <img className='busan3' src={bsimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/busan")
            
            }}></img>
            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        }
    }
    function BtnImg6(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
        return(
            <div>
            <img className='pyeongchang1' src={pcimage1} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/pyeongchang")
            
            }}></img>
            <img className='pyeongchang2' src={pcimage2} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/pyeongchang")
            
            }}></img>
            <img className='pyeongchang3' src={pcimage3} style={{cursor:"pointer" }}
            onClick={()=>{
            navigate("/pyeongchang")
            
            }}></img>

            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        } 
    }
export default Main;