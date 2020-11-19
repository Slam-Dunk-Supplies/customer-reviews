/* eslint-disable react/sort-comp */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import NewestView from './NewestView.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      showNum: 2,
      saved: [],
      clickedRate: null,
    };
    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.moreOrDefault = this.moreOrDefault.bind(this);
    this.pushSavedReviewUp = this.pushSavedReviewUp.bind(this);
    this.ifClickedRating = this.ifClickedRating.bind(this);
  }

  componentDidMount() {
    this.updateState(); // only run once after page load first time
  }

  componentDidUpdate() {
    if (this.state.clickedRate !== this.props.clickedRating) {
      this.ifClickedRating();
    }
  }

  // state change. but on click function on this page
  ifClickedRating() {
    if (this.props.clickedRating !== null) {
      const arr = this.props.reviews;
      const filterd = arr.filter((review) => review.star_rating === this.props.clickedRating);
      this.setState({
        reviews: filterd,
        clickedRate: this.props.clickedRating,
      });
    }
  }

  handleClick(e) {
    const arr = this.props.reviews;
    const { distribution } = this.props;
    if (e.target.title === 'NEWEST') {
      arr.sort((a, b) => Date.parse(b.create_date) - Date.parse(a.create_date));
      this.setState({
        reviews: arr,
      });
    } else if (e.target.title === 'RELEVANT') {
      const max = [0, 'star'];
      for (const key in distribution) {
        if (distribution[key] > max[0]) {
          max[0] = distribution[key];
          max[1] = key;
        }
      }
      const filterd = arr.filter((review) => review.star_rating === max[1]);
      this.setState({
        reviews: filterd,
      });
    } else if (e.target.title === 'SAVED') {
      const { saved } = this.state;
      this.setState({
        reviews: saved,
      });
    }
  }

  moreOrDefault(e) {
    const totalReviewNum = this.state.reviewsNum;
    if (e.target.title === 'SHOW MORE') {
      const curretnNum = this.state.showNum;
      if (this.state.showNum < this.state.reviewsNum) {
        if (this.state.showNum + 5 < this.state.reviewsNum) {
          this.setState({
            showNum: curretnNum + 5,
          });
        }
      } else {
        this.setState({
          showNum: totalReviewNum,
        });
      }
    } else if (e.target.title === 'CLOSE') {
      if (this.state.reviewsNum >= 2) {
        this.setState({
          showNum: 2,
        });
      } else {
        this.setState({
          showNum: totalReviewNum,
        });
      }
    }
  }

  pushSavedReviewUp(savedArr) {
    this.setState({
      saved: savedArr,
    });
  }

  updateState() {
    if (this.props.reviews.length < 2) {
      this.setState({
        reviews: this.props.reviews,
        reviewsNum: this.props.reviews.length,
        showNum: this.props.reviews.length,
      });
    } else {
      this.setState({
        reviews: this.props.reviews,
        reviewsNum: this.props.reviews.length,
      });
    }
  }

  render() {
    return (
      <div className="item detail-reviews">
        <div className="top-buttons" onClick={this.handleClick} role="presentation">
          <div>
            <button className="tab-button" type="button" title="NEWEST" value="0">NEWEST</button>
          </div>
          <div>
            <button className="tab-button" type="button" title="SAVED" value="1">SAVED</button>
          </div>
          <div>
            <button className="tab-button" type="button" title="RELEVANT" value="2">RELEVANT</button>
          </div>
        </div>
        {Object.keys(this.state.reviews).length > 0
        && (
        <NewestView
          reviews={this.state.reviews.slice(0, this.state.showNum)}
          pushUpSaved={this.pushSavedReviewUp}
        />
        ) }
        <div className="buttom-buttons" onClick={this.moreOrDefault} role="presentation">
          <div>
            <button className="more-reviews" type="button" title="SHOW MORE">SHOW MORE</button>
          </div>
          <div>
            <button className="default" type="button" title="CLOSE">CLOSE</button>
          </div>
        </div>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  distribution: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  clickedRating: PropTypes.string,
};

export default Reviews;
