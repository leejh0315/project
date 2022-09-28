import React from "react";
import {useNavigate} from 'react-router-dom';

function End(){
    let navigate = useNavigate();
    return(
        <div>
            <video className="video"
                muted = "muted" autoplay="autoplay" src={process.env.PUBLIC_URL+"/image/end.mp4"} type="video/mp4">
                <source src={process.env.PUBLIC_URL+"/image/end.mp4"} type="video/mp4"/> 
            </video>
            <div className="intro">
                <img src={process.env.PUBLIC_URL+"/image/return.jpg"} className="end1" style={{cursor:'pointer'}}
                onClick={()=>{
                    navigate('/')
                }}></img>
            </div>
        </div>
    )
}
export default End;
