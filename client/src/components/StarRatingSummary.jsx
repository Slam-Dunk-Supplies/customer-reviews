import React from 'react';

class StarRatingSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className='out-of-5'>{this.props.overallRating}</div>
        {this.props.ratingDistribution.map((rating) => (
          <div>{JSON.stringify(rating)}</div>
        ))}
      </div>
    )
  }
}

export default StarRatingSummary;