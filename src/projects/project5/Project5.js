
import React from 'react';
import "./Project5.css";
import drawing from "./p5_images/connect-sketch.jpg"
function Project5() {
  return (
    <div>
      <header className = "P5-header">
      </header>
      <div className="head-containerP5">
        <h1>05</h1>
          <div>
            <h2>UCSD In A Box</h2>
            <h3>Prospective Business, Physical Product</h3>
            <h3>Display of Hands On Skills</h3>
          </div>
        
      </div>
      <div className = "headimg">
      </div>
      <div className="bodyP5">
        <p>
          UCSD in a Box is a business focused on creating mementos to commemorate the top landmarks around UCSD. Our most popular product is a 3D puzzle of UCSD’s Geisel Library, and we hope to soon start creating memorabilia of other renowned structures at UCSD. Our products will include 3D puzzles, Christmas ornaments, keychains, and more!        </p>
        <h3>How We Started:</h3>
        <p>
          As a project for a Design class, my friend and I were tasked with creating a memento for a specific place or event of our choosing. Our idea was to create a memento of Geisel Library. Through this class, we discovered the existence of the Makerspace at UCSD. Here, a wide variety of tools is available for students to use, including 3D printers, laser cutters, resin printers, and a full woodshop. For our project, we decided to utilize the laser cutters to create pieces for the Geisel out of wood and acrylic. The original rendition featured a wooden base, a central pillar, and layers of 1/8th inch wood and acrylic stacked to represent the floors. We glued the layers together to ensure stability. At this point, we thought it was nothing more than just a class project.
        </p>
        <h3>Prototyping:</h3>
          <div className="prototyping-container">
            <div className="prototyping-text">
              <p>
                The next step was to create a definitive product that we actually wanted to sell. We realized that layers of wood and acrylic glued together might not be the best product design. Instead, we decided to transform the model into a 3D build-it-yourself puzzle that requires no glue or adhesive of any kind.<br></br><br></br>I began mocking up designs I thought would work on my iPad, just sketching out rough ideas for connection systems that don't require glue. After finalizing an idea I believed would work best, the next step was creating the pieces in Inkscape, a software used for vector graphics.<br></br><br></br>After about two days of designing, printing, testing, and tweaking, to my surprise, my idea for a connection system worked out perfectly. Now, we have clearance to sell the models at the UCSD Craft Center and are working to get them into the campus bookstore. Once we receive approval for the idea, our next steps will be to finalize packaging and instructions.
              </p>
            </div>
            <div className="prototyping-image">
              <img src = {drawing}/>
            </div>
          </div>
        <h3> The Final Product:</h3>
        <p>
          
        </p>
      </div>
      <div className = 'P5-footer'></div>
    </div>
  );
}

export default Project5;
