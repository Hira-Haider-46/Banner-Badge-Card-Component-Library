import React from 'react';
import "./Banner.css";

function Banner({ icon, title, text, variant, multiline }) {
    return (
        <div className={`banner ${variant} ${multiline ? 'multiline' : 'singleline'}`}>
            {icon && <span className="icon">{icon}</span>}
            <div className='text-box'>
                <p className='title'>{title}</p>
                {multiline && <p className='text'>{text}</p>}
            </div>
        </div>
    );
}

export default Banner;