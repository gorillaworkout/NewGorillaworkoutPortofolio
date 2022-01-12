import React from 'react'


export default function RoundSocialMedia(data){

    return (
        <>
            <a href={`https://${data.data.link}`} target="_blank" className="icon-round-socmed">
                {data.data.icon}
            </a>
        </>
    )
}