
import React from 'react';
import "./Project1.css";
import redesign from "./p1_images/Project1.png";
import data from "../../images/data.png"

function Project1() {
  return (
    <div>
      <header className = "P1-header">
      </header>
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
        <p>
          As a project for my DSGN 1 class, I was placed in a group with 5 other designers with an objective to find an everyday item that had some sort of flaw in its design. My group chose the rideshare service SPIN.
          <a href= "https://docs.google.com/document/d/1VHDvcHSWqgVnjmUWmJ2Z4fSX8D6n0XTA0cI4hHTgxnA/edit" target = 'blank'>The full report can be found here</a>, a brief summary can be found down the page.
        </p>
        <h3>Skills Displayed:</h3>
        <ul>
          <li>User Research and Analysis</li>
          <li>User Journey Mapping</li>
          <li>Prototyping</li>
          <li>Group Collaboration</li>
        </ul>
        <ul>
          <li>Design Thinking</li>
          <li>Problem-Solving Abilities</li>
          <li>Documentation and Reporting</li>
        </ul>
        <h3>Brief Summary:</h3>
        <p>
          Based on our group's previous experience riding SPIN scooters, there were several notable issues in the design that hindered the overall user experience. 
          This included random speed changes, inabilities to end rides, lack of storage, and overall dissatisfaction with the accompanying app. In order to confirm 
          these problems/potentially discover more problems, each of us conducted 5-8 interviews with random people on the UCSD campus. The interviews consisted of pre-task questions, followed by a task on the scooters themselves, and finally post-task questions.
          This data was then collected and analyzed to find the most common user problems with SPIN services. 
        </p>
        <p>
          The trends found were analyzed based on Don Normans principles of design as discussed in his book "The Design of Everyday Things". Our redesign followed these same principles making use of the Double Diamond Method, Design Spaces, the concepts of Afordances and Signifiers, etc.  
        </p>
        <h3>What We Found:</h3>
        <p>
          Throughout the interview process, the mentioned issues from most to least mentioned were as follows: App (23/23), Speed (18/23), Parking (18/23), Brakes (13/23), Auto-Speed Reduce (10/23), Storage (4/23), and finally Alarm Notification (3/23).
        </p>
        <div className="data-img" >
          <img src={data}/>
        </div>
        <h3>Trends:</h3>
        <p>
        The three most prominent issues brought up during the interviews were speed, the parking process, and dissatisfaction with the app in general. As a group, we decided to focus on the physical scooters instead of reconstruction of the app. Because of this, in order to resolve problems that users had with the app, we decided to add corresponing
        physical features to the scooter itself. For example, in order to cancel a ride and park the scooter, the user had to do so through the app. However there are many situations where this is not possible(phone dies, no service, etc). In order to solve this, we placed a physical "park" button on the scooter. This solves any limitations the user might have with the app and
        makes the parking process smoother.
        </p>
        <p>
          The other most prominent issue that users had wth the scooters was speed (or lack there of). In total, 18/23 people interviewed had issues with the scooters speed with half of those noting that the scooters were much to slow in general. The scooters also have a speed reduction mechanism when entering certain zones around the UCSD campus. However there is no indication
          as tp when you are netering or exiting one of these zones making your soeed unpredictible. 10/18 people interviewed mentioned this as a major saftey issue that shies them away from using the scooters. After doing some field testring and research, we noted that there are three different speed zones you can enter around campus: 12mph, 8-10mph, and 5mph. Transfering from a 12mph to a 5mph zone speeds the scooter down instantly 
          and doing the opposite speed the scooter up instatnyl aswell. To resolve this, we implemented a flat speed of 10mph, fast enough to get around, but slow enough to allow for safe travel. 
        </p>
        <p>
          A deeper analysis can be found in the full project document linked at the top!
        </p>
      </div>
      <footer className="P1-footer">
      </footer>
 
    </div>
  );
}

export default Project1;
