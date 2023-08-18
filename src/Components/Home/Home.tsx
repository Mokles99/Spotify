  import React, { useEffect } from "react";
  import { useTranslation } from "react-i18next";
  import "./home.css";
  import video3 from "../../assets/spotif.mp4";
  import { GrLocation } from "react-icons/gr";
  import { HiFilter } from "react-icons/hi";
  import { FiFacebook } from "react-icons/fi";
  import { AiOutlineInstagram } from "react-icons/ai";
  import { SiTripadvisor } from "react-icons/si";
  import { BsListTask } from "react-icons/bs";
  import { TbApps } from "react-icons/tb";
  import Aos from "aos";
  import "aos/dist/aos.css";

  // ... (autres imports)

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"> </div>
      <video src={video3} loop autoPlay muted>
        <source src={video3} type="video/mp4" />
      </video>

      <div className="homeContent container">
        <div className="centerContent">
          <h1 data-aos="fade-up" className="mainTitle">Get Premium free for 1 month</h1>
          <p data-aos="fade-up" className="subTitle">Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
          <div data-aos="fade-up" className="buttonContainer">
            <button className="getStartedBtn">Get started</button>
            <button className="seePlansBtn">See other plans</button>
          </div>
          <p data-aos="fade-up" className="termsText">
            <span className="underline">Terms and conditions apply</span>. 1 month free not available for users who have already tried Premium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

