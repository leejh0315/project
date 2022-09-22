import React from "react";
import video from "./../image/video.mp4";

function Video(){
    return(
        <div>
            <video style={{padding:'0px', margin:'0px', width:'100%'}} muted autoplay loop>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}
export default Video;
