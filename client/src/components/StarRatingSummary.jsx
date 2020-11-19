/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Stars from './StarScale.jsx';

class StarRatingSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="item ratings">
        <div className="out-of-5">
          <div className="out-of-5-1">
            {this.props.overallRating}
          </div>
          <div className="out-of-5-sub">
            <div className="out-of-5-2">
              <Stars ratio={Number(this.props.overallRating)} />
            </div>
            <div className="out-of-5-3">
              {`${this.props.reviews.length} Reviews`}
            </div>
          </div>
        </div>
        <div className="break-down">
          RATING BREAKDOWN
          <RatingBreakdown ratingDistribution={this.props.ratingDistribution} />
        </div>
      </div>
    );
  }
}

export default StarRatingSummary;
