import React from "react";
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
            <a href="#">
              <i className="fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, WE'RE{" "}
              <span className="highlighted-text">Cholwe and Mapalo</span>
            </span>
          </div>
          <div className='profile-details-role'>
              {/* <span className='primary-text'>
                  {" "}
                  <h1>
                     {" "} 
                     <Typical
                     loop={Infinity}

                     steps={[
                       "Enthusiastic Devs 🛑",
                       1000,
                       "Full-Stack Developers 🌐",
                       1000,
                       "Creative Designers ✍🏾",
                       1000,
                       "Database Creators 💻",
                       1000,
                       "Database Analysts 👨🏾‍💻",
                       1000,
                     ]}
                     />
                  </h1>
                <span className='profile-role-tagline'>
              Knack of building applications with front and back-end operations
            </span>  
                </span> */}
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {""}
              Hire Me
            </button>
            <a href='ehizcv.pdf' download='Ehidedu ehizcv.pdf'>
              <button className="btn highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
