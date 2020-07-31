import React, { useState } from 'react'
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import Jump from 'react-reveal/Jump';

import './styles.css'
import logo from '../../assets/logoNew.png'

export default function Video() {
    let {videoId} = useParams();
    let videoUrl = "https://youtu.be/"+videoId;
    

    return (
        <div className="video-container">
            <section className="page">
                <div className="logo-text">
                    <Jump>
                        <h1>Video player</h1>
                    </Jump>
                </div>
                <div className="desc-text">
                    <ReactPlayer 
                        className="react-player"
                        url={videoUrl} 
                        controls />
                </div>
            </section>
        </div>
    )
}
