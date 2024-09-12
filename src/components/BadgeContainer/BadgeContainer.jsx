import React from 'react';
import Badge from '../Badge';
import "./BadgeContainer.css";

function BadgeContainer({ badges }) {
    return (
        <div className='badge-container'>
            {badges.map((badge, index) => (
                <Badge
                    key={index}
                    color={badge.color}
                    bgColor={badge.bgColor}
                    borderRadius={badge.borderRadius}
                />
            ))}
        </div>
    );
}

export default BadgeContainer;