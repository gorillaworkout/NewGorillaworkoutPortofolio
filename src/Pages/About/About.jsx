import React, { useState, useEffect } from 'react'
import '../../Styles/About.scss'
import Typewriter from 'typewriter-effect';
import GorillaLogo from '../../Assets/gorillalogops.png'
import {Link} from 'react-router-dom'
export default function About(){

    return (
        <>
            <div className="big-container-about">
                <div className="menu-home">  
                    <Link to="/home"  className="header-logo-about">
                        <img src={GorillaLogo} alt="" />
                    </Link> 
                    <div className="box-aboutme">
                        <p>ABOUT</p>
                        <p>
                          <Typewriter
                            options={{
                                strings: ['Hi, I am Bayu Darmawan'],
                                autoStart: true,
                                loop: true,}}
                                /> <br/> 
                        someone who changes his career into a programmer, <br/>
                        Have a strong desire in working as a front-end, <br/>
                        I'm a problem solver and a persistent person when facing a challenge <br/>
                        </p> 
                    </div>
                </div>
                <div className="box-img-home">
                </div>
            </div>
        </>
    )
}