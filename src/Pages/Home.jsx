import React,{useState,useEffect} from 'react'
import './Home.scss'
import GorillaLogo from '../Assets/newbggw.png'
import ImgEffect from '../Components/Effect/img_effect'
import Linkedin from '../Assets/linkedin.png'
import {SiMinutemailer,SiMaildotru} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {FaInstagram,FaFacebookF,FaWhatsapp} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import RoundSocialMedia from '../Components/SocialMedia/RoundSocialMedia'
import Jello from 'react-reveal/Jello';
import HeadShake from 'react-reveal/HeadShake';
import {Link} from 'react-router-dom'

export default function Home(){
    AOS.init();

    const [isAbout,setIsAbout]=useState(false)
    const [isWork,setIsWork]=useState(false)
    const [isContact,setIsContact]=useState(false)

    const [dataToSocialMedia,setDatatoSocialMedia]=useState({
        // allSubCategory:Product.allSubCategory
    })


    
    return (
        <>
            <div className="big-container-home">
                <div className="menu-home">
                    {
                    isAbout ? 
                    <Link to="/about-me" className="hello" onMouseLeave={()=>setIsAbout(false)}>
                        About
                    </Link>
                    :
                    <button className="hello" onMouseEnter={()=>setIsAbout(true)}>
                        Hello.
                    </button>
                    }
                     
                    {
                        isWork?
                    <Link to="/work" className="iam" onMouseLeave={()=>setIsWork(false)}>
                        Work
                    </Link>
                        :

                    <button className="iam" onMouseOver={()=>setIsWork(true)}>
                        I am
                    </button>
                    }


                    {
                        isContact ? 
                    <Link to="/contact" className="bayu" onMouseLeave={()=>setIsContact(false)}>
                        Contact
                    </Link>
                        :
                    <button className="bayu" onMouseOver={()=>setIsContact(true)}>
                        Bayu
                    </button>

                    }
                   
                </div>
                <div className="box-img-home">
                
                </div>
            </div>
        </>
    )
}