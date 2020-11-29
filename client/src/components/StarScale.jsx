import React from 'react';
import PropTypes from 'prop-types';

const Stars = (props) => {
  const blackStars = [];
  for (let i = 0; i < Math.round(props.ratio); i++) {
    blackStars.push((<span key={`${props.id}a${i}`}>&#9733;</span>));
  }
  return (
    <div>
      <span className="black-star">{blackStars}</span>
      <span className="grey-star">&#9734;&#9734;&#9734;&#9734;&#9734;</span>
    </div>
  );
};

Stars.propTypes = {
  ratio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Stars;
