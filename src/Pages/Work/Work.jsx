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
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>Gorillafy</h2>
                                        <p>React Native</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
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
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>GorillaTrip</h2>
                                        <p>React JS</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
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
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>GorillaDoc</h2>
                                        <p>React JS</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
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
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>Moojol</h2>
                                        <p>React JS</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
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
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>To do List</h2>
                                        <p>React Native</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
                                </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="Iof5zN3yM0s" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    <div  className="work-about">
                        <div className="box-header-work">
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>Pokemon</h2>
                                        <p>React JS</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
                                </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="Iof5zN3yM0s" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                    <div  className="work-about">
                        <div className="box-header-work">
                            <div className="gorillaworkout">
                                {/* <span>GORILLAWORKOUT</span> */}
                                <p className="popout">
                                    <span>P</span>
                                    <span>R</span>
                                    <span>O</span>
                                    <span>J</span>
                                    <span>E</span>
                                    <span>C</span>
                                    <span>T</span>
                                </p>
                            </div>
                            <Link to="/" className="icon-logo-header">
                                <img src={GorillaLogo} alt="" />
                            </Link>
                        </div>
                        <div className="body-work">
                            <div className="body-work-left">
                                <button className="btn-list-project">
                                        <h2>Soldays</h2>
                                        <p>React JS</p>
                                </button>
                                <div className="body-detail-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat quis a veritatis, repellat soluta culpa obcaecati vitae quae dolor minus! Eos delectus omnis unde tenetur blanditiis tempore recusandae nobis.</p>
                                </div>
                            </div>
                            <div className="body-work-right">
                                <YouTube videoId="Iof5zN3yM0s" opts={opts} onReady={onReady} />
                            </div>
                        </div>
                    </div>
                </AwesomeSlider>
            </div>
        </>
    )
}