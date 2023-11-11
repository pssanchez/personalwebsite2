import React from 'react';
import shaping1 from './content/shaping1.mp4';
import shaping2 from './content/shaping2.mp4';
import shaping3 from './content/shaping3.mp4';
import shaping4 from './content/shaping4.mp4';
import shaping5 from './content/shaping5.png';
import shaping6 from './content/shaping6.png';
import './FinalProductGallery.css'

const FinalProductGallery = () => {
  const items = [
    { type: 'image', src: shaping6 },
    { type: 'image', src: shaping5 },
    { type: 'video', src: shaping1 },
    { type: 'video', src: shaping2 },
    { type: 'video', src: shaping3 },
    { type: 'video', src: shaping4 },
  ];

  return (
    <div className="final-product-gallery">
      {items.map((item, index) => (
        <div className="gallery-item" key={index}>
          {item.type === 'image' ? (
            <img src={item.src} alt={`Gallery Item ${index + 1}`} />
          ) : (
            <video controls>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
}

export default FinalProductGallery;
