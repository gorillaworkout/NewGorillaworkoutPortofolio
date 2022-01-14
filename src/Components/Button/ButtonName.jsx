import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/ButtonComponents.scss'

export default function ButtonName({arr}){

    return (
        <>
            {
                arr.isLink ? 
            <Link to={`${arr.Link}`} className={arr.className} onMouseLeave={arr.onFunc}>
                {arr.title}
            </Link>
                :
            <button className={arr.className} onMouseEnter={arr.onFunc}>
                {arr.title}
            </button>
            }
        </>
    )
}