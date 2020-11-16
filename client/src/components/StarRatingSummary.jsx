/* eslint-disable brace-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class StarRatingSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="out-of-5">{this.props.overallRating}</div>
        {JSON.stringify(this.props.ratingDistribution)}
      </div>
    );
  }
}

export default StarRatingSummary;
