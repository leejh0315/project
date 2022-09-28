import React from "react";
import {useNavigate} from 'react-router-dom';

function Video(){
    let navigate = useNavigate();
    return(
        <div>
            <video className="video"  style={{cursor:"pointer" }}
            onClick={()=>{
                navigate('/main')}}
                muted = "muted" autoplay="autoplay" loop="loop" src={process.env.PUBLIC_URL+"/image/intro.mp4"} type="video/mp4">
                <source src={process.env.PUBLIC_URL+"/image/intro.mp4"} type="video/mp4"/> 
            </video>
            <div className="intro">
                <img className="intro-text" src={process.env.PUBLIC_URL+"/image/intro1.png"}></img>
            </div>
        </div>
    )
}
export default Video;
