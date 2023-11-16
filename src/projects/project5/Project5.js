
import React from 'react';
import "./Project5.css"
import cb11 from './p5_images/cb1.1.png'
import cb12 from './p5_images/cb1.2.png'
import cb21 from './p5_images/cb2.1.png'
import cb22 from './p5_images/cb2.2.png'
import cb31 from './p5_images/cb3.1.png'
import cb32 from './p5_images/cb3.2.png'
import p5head from './p5_images/p5head.png'
function Project5() {
  return (
    <div>
      <header className = "P5-header">
      </header>
      <div className="head-containerP5">
        <h1>05</h1>
          <div>
            <h2>Custom Upcycled Chalkbags</h2>
            <h3>Started for fun, Ongoing Project</h3>
            <h3>Physical Product</h3>
          </div>
      </div>
      <div className = "headimg5"> 
        <img src = {p5head}/>
      </div>
      <div className="bodyP5">
       

        <p>
          When rock climbing, spreading chalk on your hands helps prevent sweating and improves grip on the rock surfaces. Chalk Bags are pretty self explanatory, they hold the chalk for you. In most cases they are a small pouch with a strap that goes around the waist so it can continue to be used while on the wall.
        </p>
        <h3>Skills Displayed:</h3>
        <ul>
          <li>Sewing and Stitching</li>
          <li>Product Design and Prototyping</li>
          <li>Attention to Detail</li>
        </ul>
        <ul>
          <li>Continuous Learning and Adaptation</li>
          <li>Pattern Making and Alteration</li>
          <li>Problem-Solving Abilities</li>
        </ul>
        <h3>Motivation</h3>
        <p> Over the course of the summer of 2023, I developed a love for rock climbing. Climbing nearly every other day at my school's gym, it soon became one of the most prominent activities in my day to day life. Eventually, the instagram algorithm started showing me tons of climbing videos, one of them being a video of somebody making their own chalk bag. Seeing this, I said to myself “I wanna try”, and so I did.
        </p>

        <h3>Prototypes:</h3>
        <p>
        My original two prototypes were very sloppy. I was using a sewing machine from the 90s that my grandma had given me and I had no idea what I was doing. After hours of sewing, then messing up, then cutting the threads, then re-sewing, then messing up again, in a seemingly endless cycle, I finally arrived at my first prototype: 
        </p>
        <div className = 'proto-images'>
          <img src = {cb11}/>
          <img src = {cb12}/>
        </div>
        <p>
        It consisted of:
        <ol>
          <li>The outer bag that I had sewn out of scrap materials</li>
          <li>A reusable ziplock freezer baggy on the inside to hold the chalk.</li> 
        </ol> 

        It kind of worked but not really. My stitches were sloppy with threads hanging everywhere, the ziplock was all warped and weird from sewing through it so it would not close properly, everything was just slightly off about it. However it was not a complete failure, and this is what gave me hope in producing prototype 2.
        </p>

        <p>
        The process for my second prototype was pretty similar but with a slight change. Make a bag shape for the exterior but find a new solution for the interior. This time I wanted to make it twice as big aswell. Why? I don't really know but I just kind of went for it.

        By this point I had started to understand the sewing machine a little better as well. My lines were getting cleaner, I started noticing less and less mistakes. I started to understand how, where, and when to place stitches. After around 4-5 hours of work, Chalk Bag Mark II was finished.
        </p>
       <p> 
        Most standard chalk bags make use of a drawstring closure system at the top of the bag that sinches tight when you pull on it. I had originally shied away from this on my chalk bags because it seemed harder than just sewing some plastic baggies in there. After contemplating and digging through my closet looking for a garment to use I finally found an old pair of pajama pants that did not fit me anymore. I cut about a foot up from the cuff of the pants on one of the legs and sewed the end without the cuff closed. I then cut a small hole in the cuff and fed a shoestring through and around the cuff of the pants. This was the inside of my chalk bag.
        </p>
        
        <p>
        I sewed the pajama pant leg into the inside of my chalk bag leaving about 2 inches of material around the top so that it can be cinched without changing the shape of the exterior. It was nearly perfect but missing something. So I took a strap off of an old bag and sewed it onto this one just because why not. And viola, my chalk bags are up and running.
        </p>
        <h3> The Final Product</h3>
        <div className = 'proto-images'>
          <img src = {cb31}/>
          <img src = {cb32}/>
        </div>
        <div className = 'proto-images'>
          <img src = {cb21}/>
          <img src = {cb22}/>
        </div>
      </div>
      <footer className="P5-footer">
      </footer>
    </div>
  );
}

export default Project5;
