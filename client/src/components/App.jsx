/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import StarRatingSummary from './StarRatingSummary.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 1,
      overallRating: 0,
      ratingDistribution: [],
      reviews: [],
    };
    this.fetchReviews = this.fetchReviews.bind(this);
    this.fetchReviews();
    this.countStarRating = this.countStarRating.bind(this);
  }

  fetchReviews() {
    // eslint-disable-next-line react/destructuring-assignment
    axios.get(`/api/reviews/${this.state.product_id}`)
      .then(({ data }) => {
        this.countStarRating(data);
        this.setState({
          reviews: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  countStarRating(reviews) {
    const starsCount = { one_stars: 0, two_stars: 0, three_stars: 0, four_stars: 0, five_stars: 0 };
    for (let i = 0; i < reviews.length; i++) {
      starsCount[reviews[i].star_rating]++;
    }
    let rating = (1 * starsCount.one_stars + 2 * starsCount.two_stars + 3 * starsCount.three_stars + 4 * starsCount.four_stars + 5 * starsCount.five_stars) / reviews.length;
    rating = Number.parseFloat(rating).toFixed(2);
    this.setState({
      ratingDistribution: starsCount,
      overallRating: rating,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  fetchDistribution() {
    // eslint-disable-next-line react/destructuring-assignment
    axios.get(`/api/reviews/distribution/${this.state.product_id}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h5 className="heading">Ratings & Reviews</h5>
        <StarRatingSummary reviews={this.state.reviews} overallRating={this.state.overallRating} ratingDistribution={this.state.ratingDistribution} />
      </div>
    );
  }
}

export default App;
