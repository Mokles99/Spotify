import React, { useEffect } from "react";
import "./one.css";
import img from '../../assets/11.png';
import img2 from '../../assets/222.png';
import img3 from '../../assets/33.png';
import img4 from '../../assets/44.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const One: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos="fade-up" className="title">The power of Premium </h2>
        <div className="mainContent container grid">
          <div data-aos="fade-right" className="singleItem">
            <img src={img} alt="Image Name" />
            <h3> Ad-free music listening </h3>
            <p>
            Enjoy uninterrupted music.
            </p>
          </div>
          <div data-aos="fade-right" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3> Offline playback</h3>
            <p>
            Save your data by listening offline.
            </p>
          </div>
          <div data-aos="fade-right" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>Play everywhere</h3>
            <p>
            Listen on your speakers, TV, and other favorite devices.
            </p>
          </div>
          <div data-aos="fade-right" className="singleItem">
            <img src={img4} alt="Image Name" />
            <h3>Pay your way</h3>
            <p>
            Prepay with Paytm, UPI, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default One;
