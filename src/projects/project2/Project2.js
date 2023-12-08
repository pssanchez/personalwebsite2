
import React from 'react';
import "./Project2.css";
import figma from './p2_images/pecan-figma.png';
import bcard from './p2_images/pecan-b-card.png'
import pecan1 from './p2_images/pecan1.png'
import pecan2 from './p2_images/pecan2.png'
import pecan3 from './p2_images/pecan3.png'
import pecan4 from './p2_images/pecan4.png'
import pecan5 from './p2_images/pecan5.png'
import pecan6 from './p2_images/pecan6.png'

function Project2() {
  return (
    <div>
      <header className = "P2-header">
      </header>
      <div className="head-containerP2">
        <h1>03</h1>
          <div>
            <h2>Pecan FO Website</h2>
            <h3>Proffesional Website, Finished Product</h3>
            <h3>UI/UX product</h3>
          </div>
      </div>
      <div className="bodyP2">
       

        <p>
          During the summer of 2022, a friend of mine reached out to me, asking if I could help him build a website for his dad's family office. All of my coding experience prior to this had been limited to personal projects, so I eagerly seized the opportunity to apply my skills to a more meaningful endeavor. In addition to this, my friend was relatively new to front-end web development and the website-building process, so I saw it as a chance to learn through teaching.  
          <a href = 'https://github.com/sebiperry/Pecan-Family-Office' target = 'blank'> The websites github repository can be found here</a>
        </p>
        <h3>Skills Displayed:</h3>
        <ul>
          <li>UI/UX</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>Web Development Tools</li>
          <li>Version Control (Git)</li>
          <li>Prototyping</li>
          <li>Customer Input -> Product</li>
        </ul>
        <h3>Process</h3>
        <p>
          My friend's dad, I'll call him Mr.Pecan since I am unsure if he would like to be featured in this excerpt, gave us only a few constraints in his desire for the website. These were: 
          <ol>
            <li>Maintain the same colors as his original business card</li> 
            <li>Keep it simple, nothing crazy or fancy </li> 
          </ol>
          <div className = 'bcardimg'>
            <p>The business card given as reference:</p>
            <img src = {bcard}/>
          </div>
        </p>

        <h3>Prototypes:</h3>
        <p>
          Our original prototype was designed on figma. The basic intended functionality was to have three tabs in a banner at the top of the screen where you could choose between the different parts of the website (home, history, about). In the top left corner we placed the company slogan as well. Each of the pages would only have text on them to keep things simple and each would have a footer with Mr.Pecans email which was the only contact information he wanted on the website. Each page would also have a main photo at the front with the Pecan Fo logo hovering in the top left. And finally to keep to the constraints, everything was done in the brown and green color scheme of the original business card.
        </p>
        <div className = 'fig-img'>
          <p>The figma prototype can be found by clicking this image:</p>
          <a href = 'https://www.figma.com/file/zdL05sQe0hpxjmzPcAL5v4/Pecan-FO-protot?type=design&node-id=0%3A1&mode=design&t=iSfW4ElkudKCC4Dl-1' target = 'blank'>
            <img src = {figma}/>
          </a>
        </div>
        <h3> The Final Product:</h3>
        <p>
          Implementing our ideas was fairly straightforward since we maintained a simple approach throughout. The pages stayed nearly identical to our original designs, except for the history page. There, instead of a single head photo, we opted for a slideshow showcasing the three locations the business was previously based out of (San Diego, Pittsburgh, New York).
        </p>
        <div className = 'fin-img'>
            <img src = {pecan1}/>
            <img src = {pecan2}/>
            <img src = {pecan3}/>
            <img src = {pecan4}/>
            <img src = {pecan5}/>
            <img src = {pecan6}/>
        </div>
      </div>
      <div className = 'P2-footer'></div>
    </div>
  );
}

export default Project2;
