import React from "react";
import Styles from "../CardItems/cardItems.module.css";
import Video from "../IndivdualVideos";
import Image from "../Image";

const CardItems = ({
  name = "Clare Streets",
  tagline = "Stay at home mum turned Business Analyst",
  quote = "“School of Code Bootcamp is lifechanging.”",
  videoURL
}) => {
  return (
    <div className={Styles.cardContainer}>
      <li className={Styles.card}>
        <div className={Styles.innerContainer}>
          <Image />

          {videoURL && (
            <div className={Styles.Video}>
              <Video videoURL={videoURL} />
            </div>
          )}

          <br />
          <div className={Styles.NameTag}>{name}</div>
          <br />
          {tagline}
          <br />
          {quote}
        </div>
      </li>
    </div>
  );
};

export default CardItems;
