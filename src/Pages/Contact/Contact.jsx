import React, { useState, useEffect } from 'react'
import '../../Styles/About.scss'
import Typewriter from 'typewriter-effect';
import GorillaLogo from '../../Assets/gorillalogops.png'
import {Link} from 'react-router-dom'
import {AiOutlineInstagram,AiOutlineMail} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
export default function Contact(){

    return (
        <>
            <div className="big-container-about">
                <div className="menu-home">  
                    <Link to="/home"  className="header-logo-about">
                        <img src={GorillaLogo} alt="" />
                    </Link> 
                    <div className="box-aboutme">
                        <p>CONTACT</p>
                        <p>
                            Let's get connected in social media !
                        </p>
                        <div className="btn-code">
                            <a href="https://www.linkedin.com/in/bayu-darmawan-09470a1b8/"   class="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                <FaLinkedinIn className="icon-linkedin"/>
                            </a>
                            <a href="https://github.com/gorillaworkout"  target="_blank" class="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                <FiGithub className="icon-linkedin"/>
                            </a>
                            <a href="https://www.instagram.com/gorillaworkout/"  target="_blank" class="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                <AiOutlineInstagram className="icon-linkedin" style={{top:'2px'}}/>
                            </a>
                            <a href="https://www.facebook.com/bayu.darmawan02/"  target="_blank" class="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                <FaFacebookF className="icon-linkedin" style={{top:'2px'}}/>
                            </a>
                            <a href="mailto:darmawanbayu1@gmail.com"  target="_blank" class="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                <AiOutlineMail className="icon-linkedin" style={{top:'2px'}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="box-img-home">
                </div>
            </div>
        </>
    )
}