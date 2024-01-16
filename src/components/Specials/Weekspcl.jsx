import React from "react";
import SpecialCard from "./SpecialCard";
import { Link } from 'react-router-dom';
import "./special.css";
import menu1 from "../../assets/images/menu1.jpg";
import menu2 from "../../assets/images/menu2.jpg"
import menu3 from "../../assets/images/menu3.jpg"



const Weekspcl = () => {
  const specialData = [
    {
      imgsrc: menu1,
      imgalt: "Greek Salad",
      name: "Greek Salad",
      price: "$15",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      imgsrc: menu3,
      imgalt: "Bruschetta",
      name: "Bruschetta",
      price: "$12",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      imgsrc: menu2,
      imgalt: "Lemon Dessert",
      name: "Lemon Dessert",
      price: "$14",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section className="wsp">
      <div className="max-width">
        <div class="flex-row gap space-between">
          <h2>Specials</h2>
          <Link to="/menu">
          <button>Online Menu</button>
              </Link>
        </div>
        <div class="wspcl">
          {specialData.map((entry) => (
            <SpecialCard entry={entry} data={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weekspcl;
