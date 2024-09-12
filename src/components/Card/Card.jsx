import React from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import "./Card.css";

function Card({ title, description, Icon }) {
    return (
        <div className='card'>
            <div className='Icon'>
                {Icon ? <Icon /> : <IoIosCloudUpload />}
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;