import React from 'react';
import PropTypes from 'prop-types';

const RatingBreakdown = (props) => {
  const { ratingDistribution } = props;

  return (
    <div>
      bar chart
    </div>
  );
};

RatingBreakdown.propTypes = {
  ratingDistribution: PropTypes.object.isRequired,
};

export default RatingBreakdown;
