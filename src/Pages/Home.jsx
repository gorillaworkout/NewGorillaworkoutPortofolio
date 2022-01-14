import React,{useState,useEffect} from 'react'
import '../Styles/Home.scss'
import GorillaLogo from '../Assets/newbggw.png'
import ImgEffect from '../Components/Effect/img_effect'
import Linkedin from '../Assets/linkedin.png'
import {SiMinutemailer,SiMaildotru} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {FaInstagram,FaFacebookF,FaWhatsapp} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import RoundSocialMedia from '../Components/SocialMedia/RoundSocialMedia'
import AwesomeSlider from 'react-awesome-slider';
import Jello from 'react-reveal/Jello';
import HeadShake from 'react-reveal/HeadShake';
import {Link} from 'react-router-dom'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import ButtonName from '../Components/Button/ButtonName'

export default function Home(){
    AOS.init();

    const [isAbout,setIsAbout]=useState(false)
    const [isWork,setIsWork]=useState(false)
    const [isContact,setIsContact]=useState(false)

    return (
        <>
            <div className="big-container-home">
                <div className="menu-home">
                    {
                    isAbout ? 
                        <ButtonName arr={{
                            isLink:true,
                            Link:'/about-me',
                            className:'hello',
                            onFunc:()=>setIsAbout(false),
                            title:'About'
                        }}/>
                        :
                        <ButtonName arr={{
                            isLink:false,
                            className:'hello',
                            onFunc:()=>setIsAbout(true),
                            title:'Hello'
                        }}/>
                    }
                     
                    {
                        isWork?
                        <ButtonName arr={{
                            isLink:true,
                            Link:'/work',
                            className:'iam',
                            onFunc:()=>setIsWork(false),
                            title:'Work'
                        }}/>
                        :

                        <ButtonName arr={{
                            isLink:false,
                            className:'iam',
                            onFunc:()=>setIsWork(true),
                            title:'I am'
                        }}/>
                    }


                    {
                        isContact ? 
                        <ButtonName arr={{
                            isLink:true,
                            Link:'/contact',
                            className:'bayu',
                            onFunc:()=>setIsContact(false),
                            title:'Work'
                        }}/>
                        :
                        <ButtonName arr={{
                            isLink:false,
                            className:'bayu',
                            onFunc:()=>setIsContact(true),
                            title:'Bayu'
                        }}/>
                    }
                    <div className="btn-menu-mobile">

                    </div>
                   
                </div>
                <div className="box-img-home">
                </div>
                
            </div>
        </>
    )
}