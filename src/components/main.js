import Button from 'react-bootstrap/Button';
import {Container} from "react-bootstrap"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Main({isShow, setIsShow, isShow1, setIsShow1}){
    let navigate = useNavigate();
    let[city, setCity] = useState([
        {   class:"su logo",
            src: "/image/city3/seoul.png"
        },{
            class: "ca logo",
            src:"/image/city3/cheonan.png"
        },{
            class:"ys logo",
            src:"/image/city3/yeosu.png"
        },{
            class:"jj logo",
            src:"/image/city3/jeju1.png"
        },{
            class:"bs logo",
            src:"/image/city3/busan.png"
        },{
            class:"pc logo",
            src:"/image/city3/pyeongchang.png"
        },{
            class:"gj logo",
            src:"/image/city3/gyeongju.png"
        },{
            class:"jj1 logo",
            src:"/image/city3/jeonju.png"
        },{
            class:"sc logo",
            src:"/image/city3/sokcho.png"
        }]);
    return(
        <div className='hi'>
            <div className="bgMap">
                {
                city.map((data,i) =>{
                    return(
                    <img className={city[i].class} src={process.env.PUBLIC_URL+city[i].src} style={{cursor:"pointer" }}
                    onClick={()=>{
                    let temp =[...isShow] //temp라는 변수에 isShow 배열을 딥카피해서 집어 넣음
                    temp[i] = !temp[i]   //temp의 0번 인덱스에, 0번  인덱스의 반대가 되는 불린값을 넣어줌
                    setIsShow(temp) //temp를 setIsShow에 집어 넣음
                    }}></img>                        
                    )
                })}
            <img className='foot' src={process.env.PUBLIC_URL+'/image/foot.jpg'}></img>
            <img className='end logo' src={process.env.PUBLIC_URL+'/image/end.png'} style={{cursor:"pointer" }}
                onClick={()=>{
                navigate('/end')
                }}></img>
            </div>
        <BtnImg1 isShow={isShow[0]} isShow1 = {isShow1[0]}  setIsShow1 = {setIsShow1[0]}></BtnImg1>
        <BtnImg2 isShow={isShow[1]} isShow1 = {isShow1[1]}></BtnImg2>
        <BtnImg3 isShow={isShow[2]} isShow1 = {isShow1[2]}></BtnImg3>
        <BtnImg4 isShow={isShow[3]} isShow1 = {isShow1[3]}></BtnImg4>
        <BtnImg5 isShow={isShow[4]} isShow1 = {isShow1[4]}></BtnImg5>
        <BtnImg6 isShow={isShow[5]} isShow1 = {isShow1[5]}></BtnImg6>
        <BtnImg7 isShow={isShow[6]} isShow1 = {isShow1[6]}></BtnImg7>
        <BtnImg8 isShow={isShow[7]} isShow1 = {isShow1[7]}></BtnImg8>
        <BtnImg9 isShow={isShow[8]} isShow1 = {isShow1[8]}></BtnImg9>
    </div>
    )
}
function BtnImg1(props){ //function은 return을 만나면 끝나버림
    let navigate = useNavigate();
    if(props.isShow == true){
        return(
        <div style={{cursor:"pointer" }} onClick={()=>{navigate("/seoul")}}>
                <img className='minibox seoul1' src={process.env.PUBLIC_URL+"/image/seoul/image1.jpg"} ></img>
                <img className='minibox seoul2' src={process.env.PUBLIC_URL+"/image/seoul/image2.jpg"}></img>
                <img className='minibox seoul3' src={process.env.PUBLIC_URL+"/image/seoul/image3.jpg"} ></img>
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
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/cheonan")}}> 
            <img className='minibox cheonan1' src={process.env.PUBLIC_URL+"/image/cheonan/image1.jpg"}></img>
            <img className='minibox cheonan2' src={process.env.PUBLIC_URL+"/image/cheonan/image2.jpg"}></img>
            <img className='minibox cheonan3' src={process.env.PUBLIC_URL+"/image/cheonan/caimage4.jpg"}></img>
            </div>
        )
        }
        else if(props.isShow == false){
            return(
                <div></div>
            )
        }
    }
    function BtnImg3(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
            return(
            <div  style={{cursor:"pointer" }} onClick={()=>{navigate("/yeosu")}}>
            <img className='minibox yeosu1' src={process.env.PUBLIC_URL+"/image/yeosu/image1.jpg"}></img>
            <img className='minibox yeosu2' src={process.env.PUBLIC_URL+"/image/yeosu/image2.jpg"}></img>
            <img className='minibox yeosu3' src={process.env.PUBLIC_URL+"/image/yeosu/image3.jpg"}></img>
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
            <div  style={{cursor:"pointer" }} onClick={()=>{navigate("/jeju")}}>
            <img className='minibox jeju1' src={process.env.PUBLIC_URL+"/image/jeju/image.jpg"}></img>
            <img className='minibox jeju2' src={process.env.PUBLIC_URL+"/image/jeju/image2.jpg"}></img>
            <img className='minibox jeju3' src={process.env.PUBLIC_URL+"/image/jeju/image3.jpg"}></img>
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
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/busan")}}>
            <img className='minibox busan1' src={process.env.PUBLIC_URL+"/image/busan/image1.jpg"} ></img>
            <img className='minibox busan2' src={process.env.PUBLIC_URL+"/image/busan/image2.jpg"}></img>
            <img className='minibox busan3' src={process.env.PUBLIC_URL+"/image/busan/image3.jpg"} ></img>
            </div>)
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
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/pyeongchang")}}>
            <img className='minibox pyeongchang1' src={process.env.PUBLIC_URL+"/image/pyeongchang/image1.jpg"} ></img>
            <img className='minibox pyeongchang2' src={process.env.PUBLIC_URL+"/image/pyeongchang/image2.jpg"} ></img>
            <img className='minibox pyeongchang3' src={process.env.PUBLIC_URL+"/image/pyeongchang/image3.jpg"} ></img>
            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        } 
    }
    function BtnImg7(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
        return(
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/gyeongju")}}>
            <img className='minibox gyeongju1' src={process.env.PUBLIC_URL+"/image/gyeongju/gyeongju1.png"} ></img>
            <img className='minibox gyeongju2' src={process.env.PUBLIC_URL+"/image/gyeongju/gyeongju2.png"} ></img>
            <img className='minibox gyeongju3' src={process.env.PUBLIC_URL+"/image/gyeongju/gyeongju3.jpg"}></img>
            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        } 
    }
    function BtnImg8(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
        return(
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/jeonju")}}>
            <img className='minibox jeonju1' src={process.env.PUBLIC_URL+"/image/jeonju/jeonju1.jpg"} ></img>
            <img className='minibox jeonju2' src={process.env.PUBLIC_URL+"/image/jeonju/jeonju2.jpeg"} ></img>
            <img className='minibox jeonju3' src={process.env.PUBLIC_URL+"/image/jeonju/jeonju3.jpg"}></img>
            </div>
        )
        }
        else if(props.isShow == false){
        return(
            <div></div>
            )
        } 
    }
    function BtnImg9(props){ //function은 return을 만나면 끝나버림
        let navigate = useNavigate();
    
        if(props.isShow == true){
        return(
            <div style={{cursor:"pointer" }} onClick={()=>{navigate("/sokcho")}}>
            <img className='minibox sokcho1' src={process.env.PUBLIC_URL+"/image/sokcho/image1.jpg"} ></img>
            <img className='minibox sokcho2' src={process.env.PUBLIC_URL+"/image/sokcho/image2.jpg"} ></img>
            <img className='minibox sokcho3' src={process.env.PUBLIC_URL+"/image/sokcho/image3.jpg"}></img>
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