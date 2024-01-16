import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='flex-column menu-width margin-bottom'>
      <div className="flex-row space-between bottomborder">
        <h2>{props.name}</h2>
        <span>{props.price}</span>
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default MenuItem