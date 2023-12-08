
import React from 'react';
import "./Project4.css";
import drawing from "./p4_images/connect-sketch.jpg";
import headimg4 from "./p4_images/proj4-head.png";
import inksc from "./p4_images/inksc.png";
import geis1 from "./p4_images/geis1.png";
import geis2 from "./p4_images/geis2.png"
import geis3 from "./p4_images/geis3.png"
function Project4() {
  return (
    <div>
      <header className = "P4-header"></header>
      <div className="head-containerP4">
        <h1>02</h1>
        <div>
          <h2>UCSD In A Box</h2>
          <h3>Prospective Business, Physical Product</h3>
          <h3>Display of Hands On Skills</h3>
        </div>  
      </div>
      <div className = "headimg4">
        <img src = {headimg4}/>
      </div>
      <div className="bodyP4">
        <div className = 'top-body'>
          <p>
            UCSD in a Box is a business focused on creating mementos to commemorate the top landmarks around UCSD. Our most popular product is a 3D puzzle of UCSD’s Geisel Library, and we hope to soon start creating memorabilia of other renowned structures at UCSD. Our products will include 3D puzzles, Christmas ornaments, keychains, and more!
          </p>
          <h3>Skills Displayed:</h3>
          <ul>
            <li>Laser Cutting and Engraving</li>
            <li>Design Adaptation</li>
            <li>CAD(Inkscape)</li>
            <li>Quality Control and Inspection</li>
            <li>Creativity and Design Innovation</li>
            <li>Problem-Solving Abilities</li>
          </ul>
          <h3>How We Started:</h3>
          <p>
            As part of a Design class project, my friend and I were given the exciting task of creating a memento for a specific place or event. We chose Geisel Library as our inspiration. During the course, we discovered UCSD's Makerspace—an amazing hub equipped with various tools like 3D printers, laser cutters, resin printers, and a complete woodshop. Opting for the laser cutters, we decided to craft Geisel-inspired pieces using wood and acrylic. Our original design involved a wooden base, a central pillar, and layered sections of 1/8th-inch wood and acrylic, symbolizing the floors. Ensuring stability, we meticulously glued the layers together. Initially, it seemed nothing more than a typical class project. However, as we walked around campus with the model, we received compliments and offers to buy it left and right. This inspired us to turn the glued model into a real product.
          </p>
        </div>
        <h3>Prototyping:</h3>
        <div className="prototyping-container">
          <div className="prototyping-text">
            <p>
              Our next goal was to create a definitive product suitable for sale. We recognized that layers of wood and acrylic glued together might not represent the best product design. Consequently, we opted to transform the model into a 3D build-it-yourself puzzle that doesn't require any glue or adhesive.
              I began sketching out rough connection system ideas on my iPad, aiming to create a design that eliminates the need for glue. Upon finalizing the concept I believed to be the most effective, I proceeded to create the pieces using Inkscape, a software for vector graphics.
              After approximately two days of designing, printing, testing, and fine-tuning, to my surprise, the connection system I envisioned worked flawlessly. Presently, we've secured clearance to sell these models at the UCSD Craft Center and are striving to get them stocked at the campus bookstore. Once our idea receives approval, our next steps will involve finalizing the packaging and instructions.
            </p>
          </div>
          <div className="prototyping-image">
            <p>Original Sketch From My Ipad</p>
            <img src = {drawing}/>
          </div>
        </div>
        <div className = "inksc-conatainer">
          <p>My inkscape files for wood and acrylic, respectivley</p>
          <img src = {inksc}/>
        </div>
        <h3> The Final Product:</h3>
        <div className = "final-prod">
          <img src = {geis1}/>
          <img src = {geis2}/>
          <img src = {geis3}/>
        </div>
      </div>
      <div className = 'P4-footer'></div>
    </div>
  );
}

export default Project4;
