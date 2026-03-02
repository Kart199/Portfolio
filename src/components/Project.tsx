import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.thefreelancewebsite.com/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.thefreelancewebsite.com/" target="_blank" rel="noreferrer"><h2>The Freelance Website</h2></a>
                <p>Developed Hiring and Recruiting platform with Next, Node.js, and MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://galambo.com/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://galambo.com/" target="_blank" rel="noreferrer"><h2>Galambo</h2></a>
                <p>Designed, developed, and launched AI Search engine.</p>
            </div>
            <div className="project">
                <a href="https://momentum.firstbrandsgroup.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://momentum.firstbrandsgroup.com/" target="_blank" rel="noreferrer"><h2>Momentum</h2></a>
                <p>Inhouse Product Of My Organisation.</p>
            </div>
          
        </div>
    </div>
    );
}

export default Project;