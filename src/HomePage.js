import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const HomePage = () => {
  const [venueName, setVenueName] = useState('');
  const [venueType, setVenueType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const floatingImageRef = useRef();
  const [stars, setStars] = useState(() => createStars(200));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const secretCode = Math.floor(10000 + Math.random() * 90000);
    try {
      const docRef = await addDoc(collection(db, "Zones"), {
        venueName,
        venueType,
        zipCode,
        state,
        streetAddress,
        population: 0,
        isVerified: false,
        isActive: true,
        secretCode
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateFloatingImagePosition = () => {
    let x = 0;
    let y = 0;
    let angle = 0;

    const updatePosition = () => {
      const xMove = Math.random() * 20 - 10;
      const yMove = Math.random() * 20 - 10;
      const rotation = Math.random() * 10 - 5;

      x += xMove;
      y += yMove;
      angle += rotation;

      x = Math.max(0, Math.min(window.innerWidth - 300, x));
      y = Math.max(0, Math.min(window.innerHeight - 300, y));

      floatingImageRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  };

  useEffect(() => {
    updateFloatingImagePosition();
  }, []);

  useEffect(() => {
    addBlinkingEffect();
  }, []);

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="homePage">
      <form onSubmit={handleSubmit}>
        <img ref={floatingImageRef} src="2.png" alt="Floating Object" className="floatingImage" />
        <div className="modal">
          <img src="1.png" alt="Logo" className="logo" />
          <input type="text" placeholder="Venue Name" value={venueName} onChange={handleChange(setVenueName)} />
          <select name="venueType" value={venueType} onChange={handleChange(setVenueType)}>
            <option value="" disabled>Select Venue Type</option>
            <option value="bar">Bar</option>
            <option value="concert">Concert</option>
            <option value="houseParty">House Party</option>
            <option value="restaurant">Restaurant</option>
          </select>
          <div className="address-inputs">
            <input type="text" placeholder="Zip Code" className="zipcode" value={zipCode} onChange={handleChange(setZipCode)} />
            <input type="text" placeholder="State" className="state" value={state} onChange={handleChange(setState)} />
          </div>
          <input type="text" placeholder="Street Address" className="street-address" value={streetAddress} onChange={handleChange(setStreetAddress)} />
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
          }}
        />
      ))}
    </div>
  );
};

export default HomePage;

function createStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }
  return stars;
}

function addBlinkingEffect() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    if (Math.random() > 0.7) {
      const duration = Math.random() * 5 + 2;
      star.style.animation = `blink ${duration}s infinite`;
    }
  });
}




