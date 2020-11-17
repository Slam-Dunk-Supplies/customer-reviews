/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';

const RatingBreakdown = (props) => {
  const { ratingDistribution } = props;
  const view = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in ratingDistribution) {
    view.push((
      <div key={key}>
        {key}
        :
        {ratingDistribution[key]}
      </div>
    ));
  }

  return (
    <div>
      {view}
    </div>
  );
};

RatingBreakdown.propTypes = {
  ratingDistribution: PropTypes.array.isRequired,
};

export default RatingBreakdown;
