/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

class NewestView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
    this.saveReview = this.saveReview.bind(this);
  }

  saveReview(e) {
    const newR = JSON.parse(e.target.value);
    const { saved } = this.state;
    const newSaved = [newR, ...saved];
    this.setState({
      saved: newSaved,
    });
    this.props.pushUpSaved(newSaved);
  }

  render() {
    const { reviews } = this.props;
    console.log('NewestView component is called, reviews: ', reviews);
    const starsNums = {
      one_stars: 1, two_stars: 2, three_stars: 3, four_stars: 4, five_stars: 5,
    };
    return (
      <div>
        {reviews.map((review) => (
          <div className="wrap" key={review.review_id}>
            <div className="stars">
              <StarRatings
                rating={starsNums[review.star_rating]}
                starDimension="15px"
                starSpacing="2px"
                starRatedColor="black"
              />
            </div>
            <time className="date">{review.create_date}</time>
            <div className="comment-title">
              {review.comment.split('.')[0]}
            </div>
            <div className="comment">
              {review.comment}
            </div>
            <div className="name">
              <span>{review.customer.name}</span>
            </div>
            <div className="bookmark">
              <div>
                Would you like to save this review?
              </div>
              <div>
                <button className="bookmark-button" type="button" onClick={this.saveReview} value={JSON.stringify(review)}>Yes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

NewestView.propTypes = {
  reviews: PropTypes.array.isRequired,
  pushUpSaved: PropTypes.func.isRequired,
};

export default NewestView;
