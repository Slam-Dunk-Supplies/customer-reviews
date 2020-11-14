import React from 'react';
import StarRatingSummary from './StarRatingSummary.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 1,
      overallRating: 0,
      ratingDistribution: []
    };
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchReviews(product_id) {
    axios.get(`/api/reviews/${product_id}`)
    .then(({data}) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  fetchDistribution(product_id) {
    axios.get(`/api/reviews/distribution/${product_id}`)
    .then(({data}) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h5 className='heading'>Ratings & Reviews</h5>
        <StarRatingSummary overallRating={this.state.overallRating} ratingDistribution={this.state.ratingDistribution}/>
      </div>
    )
  }
}

export default App;