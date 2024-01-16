import React from 'react'
import Tcard from './Tcard';
import "./testimonial.css";

import testimonial1 from "../../assets/images/testimonial1.jpeg";
import testimonial2 from "../../assets/images/testimonial2.jpeg";
import testimonial3 from "../../assets/images/testimonial3.jpeg";
import testimonial4 from "../../assets/images/testimonial4.jpeg";




const Testimonial = () => {
    const data = [
      {
        image: testimonial1,
        alt: "Carlos Gutierrez",
        name: "Carlos Gutierrez",
        rating: 4,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: testimonial2,
        alt: "Stacey Duran",
        name: "Stacey Duran",
        rating: 3.5,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: testimonial3,
        alt: "Kenzo Tenma",
        name: "Kenzo Tenma",
        rating: 5,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: testimonial4,
        alt: "Julia Taylor",
        name: "Julia Taylor",
        rating: 4.5,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ];
  return (
    <section class="testimonials gap">
      <div class="max-width">
        <h2 class="heading white-bold">What people say about us!</h2>
        <div class="cards">
          {data.map((entry) => (
            <Tcard entry={entry} data={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial