
import React from 'react';
import "./Project1.css";
import redesign from "./p1_images/Project1.png";
import data from "../../images/data.png"
import {RevealBar}from "../../RevealBar"
function Project1() {
  return (
    <div>
      <header className = "P1-header"></header>
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
          For my DSGN 1 class project, I collaborated with five other designers in a group. Our objective was to identify a flaw in the design of an everyday item. Our group selected the rideshare service SPIN.          <a href= "https://docs.google.com/document/d/1VHDvcHSWqgVnjmUWmJ2Z4fSX8D6n0XTA0cI4hHTgxnA/edit" target = 'blank'>The full report can be found here</a>, a brief summary can be found down the page.
        </p>
        <h3>Skills Displayed:</h3>
        <div className = "list-display">
          <ul>
            <li>User Research and Analysis</li>
            <li>User Journey Mapping</li>
            <li>Prototyping</li>
            <li>Group Collaboration</li>
            <li>Design Thinking</li>
            <li>Problem-Solving Abilities</li>
            <li>Documentation and Reporting</li>
          </ul>
        </div>
        <h3>Brief Summary:</h3>
        <p>
          Based on our group's prior experiences with SPIN scooters, we identified several notable design issues that significantly impacted the overall user experience. These included random speed fluctuations, difficulties in concluding rides, insufficient storage options, and widespread dissatisfaction with the accompanying mobile app.
          To validate these issues and potentially uncover further concerns, each team member conducted 5-8 interviews with individuals randomly selected from the UCSD campus. The interviews comprised pre-task inquiries, a task involving the use of the scooters, and subsequent post-task questions.
          We collected and analyzed this data to pinpoint the most prevalent user-related problems associated with SPIN's services.
        </p>
        <p>
          The trends identified were analyzed according to Don Norman's principles of design, as discussed in his book 'The Design of Everyday Things.' Our redesign adhered to these principles, leveraging methodologies such as the Double Diamond Method, Design Spaces, and the concepts of Affordances and Signifiers.        </p>
        <h3>What We Found:</h3>
        <p>
          Throughout the interview process, the issues, ranked from most to least mentioned, were as follows: App (23/23), Speed (18/23), Parking (18/23), Brakes (13/23), Auto-Speed Reduce (10/23), Storage (4/23), and finally, Alarm Notification (3/23).        </p>
        <div className="data-img" >
          <img src={data}/>
        </div>
        <h3>Trends:</h3>
        <p>
          The three most prominent issues raised during the interviews were speed, the parking process, and overall dissatisfaction with the app. As a group, we opted to concentrate on enhancing the physical scooters rather than redesigning the app. To address user concerns related to the app, we decided to integrate corresponding physical features onto the scooter itself.
          For instance, users previously needed the app to cancel a ride and park the scooter, which posed challenges when unable to access the app due to phone issues or lack of service. To mitigate this, we introduced a physical 'park' button on the scooter. This modification resolves any limitations users might encounter with the app, leading to a smoother parking process.
        </p>
        <p>
          One of the most significant issues users encountered with the scooters was their speed, or rather, the lack thereof. Among the 23 individuals interviewed, 18 expressed concerns about the scooters' speed, with half of them noting that the scooters were generally too slow. Additionally, the scooters featured a speed reduction mechanism upon entering specific zones around the UCSD campus. However, there was no indication of entering or exiting these zones, resulting in unpredictable speed changes.
          Ten out of the 18 individuals who mentioned this issue identified it as a major safety concern, dissuading them from using the scooters. Upon conducting field tests and research, we discovered three different speed zones on campus: 12mph, 8-10mph, and 5mph. Transitions between these zones caused instant and drastic speed changes – decelerating to 5mph or accelerating from 8mph to 12mph in an instant.
          To address this, we implemented a consistent speed of 10mph. This speed allows for efficient travel while ensuring safety, resolving the unpredictability associated with varying speed zones.
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
