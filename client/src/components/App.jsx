/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import StarRatingSummary from './StarRatingSummary.jsx';
import RecommendSummary from './RecommendSummary.jsx';
import Reviews from './Reviews.jsx';

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
    this.countStarRating = this.countStarRating.bind(this);
    // shouldn't call funtion here, move it to componentDidmount()
    // which needs conditional statement to go together
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews() {
    axios.get(`/api/reviews/${this.state.product_id}`)
      .then(({ data }) => {
        this.countStarRating(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  countStarRating(reviews) {
    const starsCount = { one_stars: 0, two_stars: 0, three_stars: 0, four_stars: 0, five_stars: 0 };
    for (let i = 0; i < reviews.length; i++) {
      starsCount[reviews[i].star_rating]++;
    }
    let rating = (1 * starsCount.one_stars
      + 2 * starsCount.two_stars
      + 3 * starsCount.three_stars
      + 4 * starsCount.four_stars
      + 5 * starsCount.five_stars) / reviews.length;
    rating = Number.parseFloat(rating).toFixed(2);
    this.setState({
      ratingDistribution: starsCount,
      overallRating: rating,
      reviews,
    });
  }

  render() {
    return (
      <div>
        <h3 className="heading">RATINGS & REVIEWS</h3>
        <div className="container">
          <div className="inner-container">
            {this.state.reviews.length > 0 && (
            <StarRatingSummary
              reviews={this.state.reviews}
              overallRating={this.state.overallRating}
              ratingDistribution={this.state.ratingDistribution}
            />
            )}
            {this.state.reviews.length > 0 && (
            <RecommendSummary />
            )}
          </div>
          {this.state.reviews.length > 0 && (
          <Reviews reviews={this.state.reviews} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
