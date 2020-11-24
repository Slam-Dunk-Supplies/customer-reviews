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
  const fitDistribution = {
    first: 0, second: 0, third: 0, fourth: 0, fifth: 0,
  };
  // eslint-disable-next-line array-callback-return
  props.reviews.map((review) => {
    comfortDistribution[review.comfort]++;
    qualityDistribution[review.quality]++;
    fitDistribution[review.fitness]++;
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
            <span className="triangle" style={{ marginLeft: averageRating(comfortDistribution) * 150, color: '#2ada71' }}>&#9660;</span>
            <svg width="50" height="4">
              <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
            </svg>
          &nbsp;&nbsp;
            <svg width="50" height="4">
              <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
            </svg>
          &nbsp;&nbsp;
            <svg width="50" height="4">
              <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
            </svg>
          &nbsp;&nbsp;
            <svg width="50" height="4">
              <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
            </svg>
          </div>
          <div>
            <span className="under-words">POOR</span>
            <span className="under-words" style={{ marginLeft: 150 }}>PERFECT</span>
          </div>
        </div>
      </div>
      <h4>
        QUALITY
      </h4>
      <div>
        <div className="bar">
          <span className="triangle" style={{ marginLeft: averageRating(qualityDistribution) * 160, color: '#2ada71' }}>&#9660;</span>
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
        </div>
        <div>
          <span className="under-words">POOR</span>
          <span className="under-words" style={{ marginLeft: 150 }}>PERFECT</span>
        </div>
      </div>
      <h4>
        FIT
      </h4>
      <div>
        <div className="bar">
          <span className="triangle" style={{ marginLeft: averageRating(fitDistribution) * 160, color: '#2ada71' }}>&#9660;</span>
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
          &nbsp;&nbsp;
          <svg width="50" height="4">
            <rect width="50" height="4" style={{ fill: 'grey' }} className="grey-bar" />
          </svg>
        </div>
        <div>
          <span className="under-words">TIGHT</span>
          <span className="under-words" style={{ marginLeft: 150 }}>LOOSE</span>
        </div>
      </div>
    </div>
  );
};

RecommendSummary.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default RecommendSummary;
