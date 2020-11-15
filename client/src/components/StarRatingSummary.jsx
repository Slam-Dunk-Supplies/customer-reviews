/* eslint-disable brace-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class StarRatingSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starDistribution: {},
    };
    this.countStarRating = this.countStarRating.bind(this);
  }

  // why this didn't work? #1 option
  componentDidMount() {
    this.countStarRating();
  }

  countStarRating() { // one solution: this function is coped to App.jsx so this func can be deleted
    // I cannot count stars like this because it is ASYNC #2 option not working
    const { reviews } = this.props;
    console.log('reviews that got passed in count funct: reviews: ', this.props);
    // eslint-disable-next-line object-curly-newline
    const starsCount = { one_stars: 0, two_stars: 0, three_stars: 0, four_stars: 0, five_stars: 0 };
    for (let i = 0; i < reviews.length; i++) {
      starsCount[reviews[i].star_rating]++;
    }
    this.setState({
      starDistribution: starsCount,
    });
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
