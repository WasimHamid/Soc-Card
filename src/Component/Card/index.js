import React from "react";
import Styles from "./cards.module.css";

import { graduates } from "../../constants";
import CardItems from '../CardItems';

const Cards = () => {
    return (
        <ul className={Styles.ul}>


            {graduates.map(({ name, tagline, quote, text, image, videoURL }, index) => (
                <CardItems
                    key={index}
                    name={name}
                    tagline={tagline}
                    quote={quote}
                    text={text}
                    image={image}
                    videoURL={videoURL}
                />
            ))}

        </ul>
    )

}

export default Cards