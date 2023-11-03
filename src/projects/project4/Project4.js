
import React from 'react';
import './Project4.css'
import headimg from "./p4_images/p4headimg.png"

function Project4() {
  return (
    <div>
      <header className = "P4-header">
      </header>
      <div className="head-containerP4">
        <h1>04</h1>
          <div>
            <h2>Custom Surfboard Shaping</h2>
            <h3>Taken on for fun, physical product</h3>
            <h3>Display of Hands On Skills</h3>
          </div>
        
      </div>
      <div className = "headimg">
        <img src = {headimg}/>
      </div>
      <div className="bodyP4">
        <p>
          Surfing is one of my favorite pastimes and sports that I do. I began shaping surfboards in the fall of 2023 because who wouldn't want to make their own surfboard, right? 
        </p>
        <h3>Motivation</h3>
        <p>
          In the mid-2000s, my dad owned a company called Trilogy Arts, which made skateboards, surfboards, and snowboards. Some of my earliest memories are of the shop we had in Kings Beach on the north shore of Lake Tahoe. My school was just a 5-minute walk away, so I would spend nearly every day there surrounded by board sport culture. Unfortunately, in the recession of 2008, my dads company went under, and we lost everything. My dream, for as long as I can remember, has been to restart this company and spread the board culture I loved and grew up in. (More on this in a future project). So, in highschool, I started pressing skateboard decks, my dad got in contact with snowboard manufacturers, and the dream slowly started coming to fruition. As of now, my major limiting factors in the progression of this business are funding and time. As a full-time student, both time and money are fairly scarce. However, the dream is not completely dead, and to continue progressing, I took it upon myself to learn how to shape surfboards.          
        </p>

        <h3>What Makes This Possible</h3>
        <p>
          My journey into surfboard shaping and the surf industry would not have been possible without the help of the people at UCSD Craft Center. Through them, I took a course with professional board shapers who guided me through the process of making my first board. Now that I have acquired the basic skills from that course, I have full access to their board shaping studio and will be spending as much time there as I can manage, as this has become one of my all-time passions. My dream to rebuild my dads business has been reignited and for that I am very grateful.
        </p>
        <h3> The Final Product:</h3>
        <p>
          The Gallery Below Displays My Process Through Shaping
        </p>
      </div>
      <div className = 'P4-footer'></div>
    </div>
  );
}

export default Project4;
