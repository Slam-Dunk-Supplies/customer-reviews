/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Stars = (props) => {
  console.log(Math.round(props.ratio));
  const blackStars = [];
  for (let i = 0; i < Math.round(props.ratio); i++) {
    blackStars.push((<span>&#9733;</span>));
  }
  console.log(blackStars);
  return (
    <div>
      <span className="black-star">{blackStars}</span>
      <span className="grey-star">&#9734;&#9734;&#9734;&#9734;&#9734;</span>
    </div>
  );
};

export default Stars;
