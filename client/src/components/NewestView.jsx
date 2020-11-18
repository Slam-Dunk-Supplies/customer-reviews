import React from 'react';
import StarRatings from 'react-star-ratings';

// eslint-disable-next-line react/prefer-stateless-function
class NewestView extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
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
          </div>
        ))}
      </div>
    );
  }
}

export default NewestView;
