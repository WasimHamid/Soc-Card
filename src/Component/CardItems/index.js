import React from "react";
import Styles from "../CardItems/cardItems.module.css";
import Video from "../IndivdualVideos"


const CardItems = ({
    image = "clare.png",
    name = "Clare Streets",
    tagline = "Stay at home mum turned Business Analyst",
    quote = "“School of Code Bootcamp is lifechanging.”",
    videoURL }) => {
    return (
        <div className={Styles.cardContainer}>
            <li className={Styles.card}>
                <div className={Styles.innerContainer}>
                    {videoURL && <div>
                        <Video videoURL={videoURL} />
                    </div>}
                </div>
            </li>
        </div>
    )

}

export default CardItems