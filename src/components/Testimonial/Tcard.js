import React from 'react'

const Tcard = ({entry}) => {

    const numToStarRating = (num) => {
        // return <i className="fab fa-facebook"></i>;

        const icon = '<i className="fab fa-facebook"></i>';
        var result= "";
        for(let i=0; i<num;i++){
            result = result + icon;
        }
        var htmlObject = document.createElement("div");
        htmlObject.innerHTML = "";
        return htmlObject;
    }
  return (
    <div class="card">
      <img
        src={entry.image}
        alt={entry.alt}
      />
      <h4>{entry.name}</h4>
      <span>
      </span>
      <q>
        {entry.quote}
      </q>
    </div>
  );
}

export default Tcard