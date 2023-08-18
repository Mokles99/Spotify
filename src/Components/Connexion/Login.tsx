import React from 'react';
import { FaFacebookF, FaApple, FaGoogle } from 'react-icons/fa';
import './login.css';

const LoginPage: React.FC = () => {
    return (
        <div className="container">
        <h1 className="title">Spotify</h1>
        <div className="line"></div>
        
        <button className="button facebook">
            <FaFacebookF />
            Connexion avec Facebook
        </button>
        
        <button className="button apple">
            <FaApple />
            Connexion avec Apple
        </button>
        
        <button className="button google">  <FaGoogle />
        Connexion avec Google</button>
        
        <div className="or-divider">
            <div className="line or"></div>
            <span className="or-text">OR</span>
            <div className="line or"></div>
        </div>
        
        <div className="input-container left-align">
            <label className="bold-label">Enter your username</label>
            <input type="text" className="input transparent-input" placeholder="Email" />
        </div>
        
        <div className="input-container left-align">
            <label className="bold-label">Enter password</label>
            <input type="password" className="input transparent-input" placeholder="Password" />
            <a href="#" className="left-align">Forget password?</a>   
        </div>
    
        <div className="bottom-container">
            <div className="checkbox-container">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button className="button small-login" style={{backgroundColor: "green"}}
                onClick={() => window.location.href = "http://localhost:3001/auth/login"}
                >Login</button>
        </div>
        
        <div className="line" style={{width: "450px", height: "2px"}}></div>
        
        <button className="button google" style={{color: "rgba(135, 135, 135, 1)", backgroundColor: "transparent"}}>Sign up for Spotify</button>
    </div>
    
    );
}

export default LoginPage;
