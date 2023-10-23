
import React from 'react';
import "./Project1.css";
import redesign from "../../images/Project1.png";

function Project1() {
  return (
    <div>
      <div className="head-containerP1">
        <h1>01</h1>
          <div>
            <h2>SPIN Scooter Redesign</h2>
            <h3>Done as a Class Project</h3>
            <h3>Research/Proposed Product</h3>
          </div>
      </div>
      <div className="head-img" >
        <img src={redesign}/>
      </div>
      <div className="bodyP1">
        <p>As a project for my DSGN 1 class, I was placed in a group with 5 other designers with an objective to find an everyday item that had some sort of flaw in its design. My group chose the rideshare service SPIN.
          <a href= "https://docs.google.com/document/d/1VHDvcHSWqgVnjmUWmJ2Z4fSX8D6n0XTA0cI4hHTgxnA/edit" target = 'blank'>The full report can be found here</a>, a brief summary can be found down the page.
        </p>
        <h3>Brief Summary:</h3>
        <p>Based on our group's previous experience riding SPIN scooters, there were several notable issues in the design that hindered the overall user experience. 
          This included random speed changes, inabilities to end rides, lack of storage, and overall dissatisfaction with the accompanying app. In order to confirm 
          these problems/potentially discover more problems, each of us conducted 5-8 interviews with random people. The interviews consisted of pre-task questions, followed by a task on the scooters themselves, and finally post-task questions.
          This data was then collected and analyzed to find the most common user problems with SPIN services. </p>
        <p>The trends found were analyzed based on Don Normans principles of design as discussed in his book "The Design of Everyday Things". Our redesign followed these same principles making use of the Double Diamond Method, Design Spaces,The concepts of Afordances and Signifiers, etc.  
        </p>
      </div>

    </div>
  );
}

export default Project1;
