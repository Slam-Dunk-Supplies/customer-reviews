/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const RecommendSummary = (props) => {
  const comfortDistribution = {
    first: 0, second: 0, third: 0, fourth: 0, fifth: 0,
  };
  const qualityDistribution = {
    first: 0, second: 0, third: 0, fourth: 0, fifth: 0,
  };
  // eslint-disable-next-line array-callback-return
  props.reviews.map((review) => {
    comfortDistribution[review.comfort]++;
    qualityDistribution[review.quality]++;
  });
  const averageRating = function (distribution) {
    let average = (distribution.first * 1
      + distribution.second * 2
      + distribution.third * 3
      + distribution.fourth * 4
      + distribution.fifth * 5) / props.reviews.length;
    average /= 5;
    return average.toFixed(2);
  };

  return (
    <div className="item reconmmend">
      <div>
        <h4>
          COMFORT
        </h4>
        <div>
          <div className="bar">
            <span className="triangle" style={{ marginLeft: averageRating(comfortDistribution) * 150 }}>&#9660;</span>
            <span>&#9149;&#9149;&#9149;&nbsp;</span>
            <span>&#9149;&#9149;&#9149;&nbsp;</span>
            <span>&#9149;&#9149;&#9149;&nbsp;</span>
            <span>&#9149;&#9149;&#9149;&nbsp;</span>
            <span>&#9149;&#9149;&#9149;&nbsp;</span>
          </div>
          <div>
            <span className="under-words">POOR</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="under-words">PERFECT</span>
          </div>
        </div>
      </div>
      <h4>
        QUANLITY
      </h4>
      <div>
        <div className="bar">
          <span className="triangle" style={{ marginLeft: averageRating(qualityDistribution) * 150 }}>&#9660;</span>
          <span>&#9149;&#9149;&#9149;&nbsp;</span>
          <span>&#9149;&#9149;&#9149;&nbsp;</span>
          <span>&#9149;&#9149;&#9149;&nbsp;</span>
          <span>&#9149;&#9149;&#9149;&nbsp;</span>
          <span>&#9149;&#9149;&#9149;&nbsp;</span>
        </div>
        <div>
          <span className="under-words">POOR</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="under-words">PERFECT</span>
        </div>
      </div>
    </div>
  );
};

RecommendSummary.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default RecommendSummary;
