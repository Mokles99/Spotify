import React, { useState } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "../../assets/logospot.png";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("navBar");
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  const handleShow = () => {
    setShowDrop(!showDrop);
  };
 
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={logo} alt="" />
           
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Premium
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Support
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Download
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                ||
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Sign up
              </a>
            </li>
            <li className="navItem">
              <a href="/login" className="navLink">
                Log in
              </a>
            </li>

          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
