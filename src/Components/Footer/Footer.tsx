import React,{useEffect} from 'react';
import logo from "../../assets/logospot.png";
import "./footer.css";
import video3 from '../../assets/footer.mp4';
import { FiSend, FiChevronRight } from "react-icons/fi";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer: React.FC = () => {

  useEffect (()=>{
    Aos.init({duration:2000})
 },[])
  return (
    <section className='footer'>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
    <div className="videoDiv" style={{background:"rgb(0 0 0 / 82%)"}}>
      {/* <video src={video3} loop autoPlay muted>
        <source src={video3} type="video/mp4" />
      </video> */}
    </div>
    <div className="secContent container">
        <div className="contactDiv flex">
          <div  data-aos="fade-up" className="text">
            <h2> Get in touch</h2>
          </div>
          <input 
    data-aos="fade-up" 
    type="text" 
    placeholder="Enter Email Address" 
    name="email" 
    style={{ 
        color: 'white',
        background: 'transparent', 
        borderColor: 'white'  ,
    }}
/>
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
         
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            <a href="#" className="logo flex">
               <img src={logo} alt=""/>
               {/* <h1> 
               <MdOutlineTravelExplore className="icon"/>  Oceana . </h1> */}
               {/* <h1>  */}
               {/* <SiYourtraveldottv className="icon"/>  */}
                 {/* Oceana . </h1> */}
               
            </a>
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon"/>
                <AiFillYoutube className="icon"/>
                <AiFillInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group one */}
                <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">        
               <span className="groupTitle">
                COMPANY
               </span>


               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                About
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Jobs
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                For the Record
               </li>

              

               </div>
            
               <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">        
               <span className="groupTitle">
                COMMUNITIES
               </span>


               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                For Artists
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Developers
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Advertising
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Investors
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Vendors
               </li>

               </div>
             
               <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">        
               <span className="groupTitle">
                USEFUL LINKS
               </span>


               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                 Support
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Web Player
               </li>

               <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Free Mobile App
               </li>

              

               </div>
        </div>
        <div className="footerDiv flex">
            <small>Spotify website</small>
            <small> Copyright 2023 - Developed by MOKHLES ~ ALL Rights Reserved</small>
        </div>
        </div>
  
        
      </div>
  </section>
  );
}

export default Footer;
