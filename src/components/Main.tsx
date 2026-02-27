import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import image from "../assets/images/photo.png"

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
         <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <h1><strong>Karthick P</strong></h1>
          <p>Full Stack Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Main;