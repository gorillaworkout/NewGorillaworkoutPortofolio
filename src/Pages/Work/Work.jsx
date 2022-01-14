import React, { useState, useEffect } from 'react'
import '../../Styles/Work.scss'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import Bayu from '../../Assets/img1.jpg'
import Bayu2 from '../../Assets/img2.jpg'
import Bayu3 from '../../Assets/img3.jpg'

import ButtonName from '../../Components/Button/ButtonName';
export default function Work(){


    const [isHeaderName,setIsHeaderName]=useState(false)
    return (
        <>
            <div className="container-work">
                <AwesomeSlider
                    animation="foldOutAnimation"
                    cssModule={[CoreStyles, AnimationStyles]}
                    mobileTouch={true}
                    >
                    <div  className="work-about">
                        <div className="work-about-left">

                        </div>
                        <div className="work-about-header">
                            <div className="box-for-btn-header">
                                {
                                    isHeaderName ? 
                                    <ButtonName
                                        arr={{
                                            isLink:true,
                                            Link:'/',
                                            className:'headerold',
                                            onFunc:()=>setIsHeaderName(false),
                                            title:'Bayu Darmawan'
                                        }}
                                    />
                                    :
                                    <ButtonName
                                        arr={{
                                            isLink:false,
                                            className:'headernew',
                                            onFunc:()=>setIsHeaderName(true),
                                            title:'GorillaWorkout'
                                        }}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div data-src={Bayu2} />
                    <div data-src={Bayu3} />
                </AwesomeSlider>
            </div>
        </>
    )
}