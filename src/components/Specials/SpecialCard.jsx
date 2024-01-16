import React from 'react';




const SpecialCard = ({entry}) => {
  return (
    <div>
      <div className="scard space-between">
        <div className="image-box">
          <img src={entry.imgsrc} alt={entry.imgalt} />
        </div>
        <div className="flex-row space-between scard-cont">
          <h4>{entry.name}</h4>
          <h4 className="price">{entry.price}</h4>
        </div>
        <p className="splcard-description scard-cont">{entry.description}</p>
        <a class="order-now flex-row scard-cont" href="/order-online">
          Order a delivery{" "}
        </a>
      </div>
    </div>
   
  );
}

export default SpecialCard