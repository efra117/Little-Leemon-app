import React from 'react'
import MenuItem from './MenuItem'
import "./menu.css"

const Menu = () => {
  const Salads = [
    {
      name: "CAESAR SALAD",
      price: "$10",
      desc: "Romaine lettuce, croutons, and Parmesan",
    },
    {
      name: "LEAFY GREEN SALAD",
      price: "$10.5",
      desc: "Tossed salad made with greens, such as lettuce, arugula, and spinach",
    },
    {
      name: "GREEK SALAD",
      price: "$11.5",
      desc: "Tomatoes, cucumbers, olives, feta, and onions.",
    },
  ];

  const fishAndMeats = [
    {
      name: "MEDITERRANEAN SALMON",
      price: "$30",
      desc: "Salmon dish full of fresh herby flavor",
    },
    {
      name: "MEDITERRANEAN CHIKEN",
      price: "$24",
      desc: "Chiken with olie oil, vegetables combined on one sheet pan",
    },
    {
      name: "LEMONY MEDITERRANEAN CHIKEN",
      price: "$20",
      desc: "Chiken with a delicious lemony flavor",
    },
  ];
  return (
    <div className="flex-column menu-div">
      <h2 className="menu-heading">Menu</h2>
      <section className="flex-row menu">
        <div className="menu-col-1">
          <h3 className="menu-h3">SALADS</h3>
         
          {Salads.map((data) => (
            <MenuItem name={data.name} price={data.price} desc={data.desc} />
          ))}
        </div>
        <div className="menu-col-2">
          <h3 className="menu-h3">FISH & MEATS</h3>
          
          {fishAndMeats.map((data) => (
            <MenuItem name={data.name} price={data.price} desc={data.desc} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu