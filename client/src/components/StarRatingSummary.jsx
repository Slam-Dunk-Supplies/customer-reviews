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
              <Stars ratio={Number(this.props.overallRating)} id={1} />
            </div>
            <div className="out-of-5-3">
              {`${this.props.reviews.length} Reviews`}
            </div>
          </div>
        </div>
        <div className="break-down">
          RATING BREAKDOWN
          <RatingBreakdown
            ratingDistribution={this.props.ratingDistribution}
            clicked={this.props.clicked}
            totalReviewNum={this.props.reviews.length}
          />
        </div>
      </div>
    );
  }
}

export default StarRatingSummary;
