import React from 'react';
import "./hero.css";
import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="max-width">
        <div className="hero-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservation">
          <button>Reserve a table </button>
              </Link>
        </div>
        <img
          class="hero-image"
          src={hero}
          alt="little lemon"
        />
      </div>
    </div>
  );
}

export default Hero