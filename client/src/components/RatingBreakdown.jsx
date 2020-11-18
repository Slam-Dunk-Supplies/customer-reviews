/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import { CanvasJSChart } from 'canvasjs-react-charts';

const RatingBreakdown = (props) => {
  const { ratingDistribution } = props;
  const options = {
    width: 200,
    height: 100,
    color: 'black',
    axisX: {
      gridColor: 'white',
    },
    axisY: {
      color: 'black',
      maximum: 5,
    },
    data: [{
      type: 'bar',
      dataPoints: [],
    }],
  };
  const convertorNum = {
    one_stars: 1,
    two_stars: 2,
    three_stars: 3,
    four_stars: 4,
    five_stars: 5,
  };
  const converterStr = {
    one_stars: '1 stars',
    two_stars: '2 stars',
    three_stars: '3 stars',
    four_stars: '4 stars',
    five_stars: '5 stars',
  };
  // eslint-disable-next-line no-restricted-syntax
  for (const key in ratingDistribution) {
    const pair = { y: convertorNum[key], label: converterStr[key] };
    options.data[0].dataPoints.unshift(pair);
  }

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

RatingBreakdown.propTypes = {
  ratingDistribution: PropTypes.object.isRequired,
};

export default RatingBreakdown;
