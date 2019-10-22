import React from 'react'
import ReactPlayer from "react-player"


const Video = ({ videoURL }) => {
    return <ReactPlayer url={videoURL} width="200px" height="200px" playing={false} />
}



export default Video