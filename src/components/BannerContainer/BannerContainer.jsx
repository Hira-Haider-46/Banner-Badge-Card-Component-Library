import React from 'react';
import Banner from '../Banner';
import { MdGppGood, MdWarning, MdError, MdUpdate } from "react-icons/md";
import './BannerContainer.css';

function BannerContainer() {
    return (
        <div className='banner-container'>
            {/* Success multiline */}
            <Banner
                icon={<MdGppGood />}
                title='Congratulations!'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
                variant='success'
                multiline={true}
            />

            {/* Success single line */}
            <Banner
                icon={<MdGppGood />}
                title='Congratulations!'
                variant='success'
                multiline={false}
            />

            {/* Error multiline */}
            <Banner
                icon={<MdError />}
                title='There is a problem with your application'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorem.'
                variant='error'
                multiline={true}
            />

            {/* Error single line */}
            <Banner
                icon={<MdError />}
                title='There is a problem with your application'
                variant='error'
                multiline={false}
            />

            {/* Warning multiline */}
            <Banner
                icon={<MdWarning />}
                title='Attention'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorem.'
                variant='warning'
                multiline={true}
            />

            {/* Warning single line */}
            <Banner
                icon={<MdWarning />}
                title='Attention'
                variant='warning'
                multiline={false}
            />

            {/* Neutral multiline */}
            <Banner
                icon={<MdUpdate />}
                title='Update available'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
                variant='neutral'
                multiline={true}
            />

            {/* Neutral single line */}
            <Banner
                icon={<MdUpdate />}
                title='Update available'
                variant='neutral'
                multiline={false}
            />
        </div>
    );
}

export default BannerContainer;