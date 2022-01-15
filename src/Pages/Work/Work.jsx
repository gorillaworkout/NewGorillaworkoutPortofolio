import React, { useState, useEffect } from 'react'
import '../../Styles/Work.scss'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import Bayu from '../../Assets/img1.jpg'
import Bayu2 from '../../Assets/img2.jpg'
import Bayu3 from '../../Assets/img3.jpg'
import GorillaLogo from '../../Assets/gorillalogops.png'
import GorillaLogo2 from '../../Assets/newbggw.png'
import ButtonName from '../../Components/Button/ButtonName';
import {Link} from 'react-router-dom'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import YouTube from 'react-youtube';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

export default function Work(){


    const [isHeaderName,setIsHeaderName]=useState(false)

    const opts = {
        height: '390',
        width: '500px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const onReady=(event)=> {
    // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
  
    return (
        <>
            <div className="container-work">
                <AwesomeSlider
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                    mobileTouch={true}
                    >
                     <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                    <div className="body-detail-left">
                                        <div className="judul-project">
                                            <p className="popout">
                                                <span>P</span>
                                                <span>O</span>
                                                <span>K</span>
                                                <span>E</span>
                                                <span>C</span>
                                                <span>O</span>
                                                <span>Y</span>
                                            </p>
                                        </div>
                                        <p id="detail-text"> <a href="https://pokedexorange.vercel.app/" style={{color:'#dcbb6e'}} target="_blank">POKECOY</a> is a website for you to catch any pokemon you want!</p>
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
                                        </div>
                                        <div className="list-code">
                                            <div className="title-list">
                                                <p>/FRONT END</p>
                                            </div>
                                            <div className="title-option">
                                                
                                                <div className="box-option button">
                                                    <p>/REACT JS </p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/BOOTSTRAP</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/REDUX</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/AXIOS</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="gJP_WJ8b6Uk" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    {/* BATAS */}
                    <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <div className="body-detail-left">
                                    <div className="judul-project">
                                        <p className="popout">
                                            <span>G</span>
                                            <span>O</span>
                                            <span>R</span>
                                            <span>I</span>
                                            <span>L</span>
                                            <span>L</span>
                                            <span>A</span>
                                            <span>F</span>
                                            <span>Y</span>
                                        </p>
                                    </div>
                                    <p id="detail-text">Gorillafy is a Spotify clone using React Native with Spotify API</p>
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
                                    </div>
                                    <div className="list-code">
                                        <div className="title-list">
                                            <p>/FRONT END</p>
                                        </div>
                                        <div className="title-option">
                                            
                                            <div className="box-option button">
                                                <p>/REACT NATIVE </p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/BOOTSTRAP</p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/REDUX</p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/AXIOS</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="Iof5zN3yM0s" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    {/* BATAS */}
                    <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <div className="body-detail-left">
                                    <div className="judul-project">
                                        <p className="popout">
                                            <span>G</span>
                                            <span>O</span>
                                            <span>R</span>
                                            <span>I</span>
                                            <span>L</span>
                                            <span>L</span>
                                            <span>A</span>
                                            <span>T</span>
                                            <span>R</span>
                                            <span>I</span>
                                            <span>P</span>
                                        </p>
                                    </div>
                                    <p id="detail-text">GorillaTrip is an Apps for booking Hotel or Apartment around the world, <br/> <span style={{fontSize:'0.5em'}}>got this design from BWA Class</span></p>
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
                                    </div>
                                    <div className="list-code">
                                        <div className="title-list">
                                            <p>/FRONT END</p>
                                        </div>
                                        <div className="title-option">
                                            
                                            <div className="box-option button">
                                                <p>/REACT JS </p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/BOOTSTRAP</p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/REDUX</p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/AXIOS</p>
                                            </div>
                                            <div className="box-option button">
                                                <p>/FIGMA</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                            <div className="body-work-right">
                                <YouTube videoId="za53BxgNHNc" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    {/* BATAS */}
                    <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                    <div className="body-detail-left">
                                        <div className="judul-project">
                                            <p className="popout">
                                                <span>G</span>
                                                <span>O</span>
                                                <span>R</span>
                                                <span>I</span>
                                                <span>L</span>
                                                <span>L</span>
                                                <span>A</span>
                                                <span>D</span>
                                                <span>O</span>
                                                <span>C</span>
                                            </p>
                                        </div>
                                        <p id="detail-text">GorillaDoc is an Apps for Listing some product for testing CRUD</p>
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
                                        </div>
                                        <div className="list-code">
                                            <div className="title-list">
                                                <p>/FRONT END</p>
                                            </div>
                                            <div className="title-option">
                                                
                                                <div className="box-option button">
                                                    <p>/REACT JS </p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/BOOTSTRAP</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/REDUX</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/AXIOS</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/JSON</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="RDUbQgzOIqM" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    {/* BATAS */}
                    <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                    <div className="body-detail-left">
                                        <div className="judul-project">
                                            <p className="popout">
                                                <span>M</span>
                                                <span>O</span>
                                                <span>O</span>
                                                <span>J</span>
                                                <span>O</span>
                                                <span>L</span>
                                            </p>
                                        </div>
                                        <p id="detail-text">Moojol is a website for Register to be a Moojol Driver</p>
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
                                        </div>
                                        <div className="list-code">
                                            <div className="title-list">
                                                <p>/FRONT END</p>
                                            </div>
                                            <div className="title-option">
                                                
                                                <div className="box-option button">
                                                    <p>/REACT JS </p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/BOOTSTRAP</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/REDUX</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/AXIOS</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/JSON</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="btv3-DlBIe0" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    {/* BATAS */}
                    <div  className="work-about">
                        <div className="box-header-work">
                            <Link to="/home" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                    <div className="body-detail-left">
                                        <div className="judul-project">
                                            <p className="popout">
                                                <span>G</span>
                                                <span>O</span>
                                                <span>R</span>
                                                <span>I</span>
                                                <span>L</span>
                                                <span>L</span>
                                                <span>A</span>
                                                <span>T</span>
                                                <span>O</span>
                                                <span>D</span>
                                                <span>O</span>
                                                <span>L</span>
                                                <span>I</span>
                                                <span>S</span>
                                                <span>T</span>
                                            </p>
                                        </div>
                                        <p id="detail-text">GorillaToDoList is a website for your notes!</p>
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
                                        </div>
                                        <div className="list-code">
                                            <div className="title-list">
                                                <p>/FRONT END</p>
                                            </div>
                                            <div className="title-option">
                                                
                                                <div className="box-option button">
                                                    <p>/REACT JS </p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/BOOTSTRAP</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/REDUX</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/AXIOS</p>
                                                </div>
                                                <div className="box-option button">
                                                    <p>/JSON</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="TK_NJOsiMb8" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                   
                   
                </AwesomeSlider>
            </div>
        </>
    )
}