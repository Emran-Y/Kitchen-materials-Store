import React, { useEffect, useRef, useState } from 'react';
import reasonOne from '../assets/reasonOne.jpg';

function Reason({ imgURL, altText, title, description }) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const titleRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = titleRef.current;
      const imageElement = imageRef.current;
      if (titleElement && imageElement) {
        const titleRect = titleElement.getBoundingClientRect();
        const imageRect = imageElement.getBoundingClientRect();
        const isTitleVisible = titleRect.top < window.innerHeight;
        const isImageVisible = imageRect.top < window.innerHeight;
        setIsTitleVisible(isTitleVisible);
        setIsImageVisible(isImageVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home-page-reason-container'>
      <img
        ref={imageRef}
        className={`reason-image ${isImageVisible ? 'show' : ''}`}
        src={imgURL}
        alt={altText}
      />
      <div className={`reason-description-container ${isTitleVisible ? 'show' : ''}`}>
        <h4 ref={titleRef} className='reason-title'>
          {title}
        </h4>
        <small className='reason-description'>{description}</small>
        <button className='reason-button'>More</button>
      </div>
    </div>
  );
}

export default Reason;