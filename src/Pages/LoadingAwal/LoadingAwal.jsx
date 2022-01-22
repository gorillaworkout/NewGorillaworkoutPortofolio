import React, { Component } from 'react'
import '../../Styles/LoadingAwal.scss'
import {Link,NavLink} from 'react-router-dom'
import Jello from 'react-reveal/Jello';

export default function LoadingAWal (){


    return (
        <>
            <Jello>
                <div className="body-home3">
                    {/* <Link to='/home4'> */}
                    <a href="/" className="home-3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <Link to='/' style={{textDecoration:'none'}}><p>GorillaWorkout</p></Link> */}
                    GorillaWorkout
                </a>
                    {/* </Link> */}
            

                </div>
            </Jello>
        
        </>
    )
}