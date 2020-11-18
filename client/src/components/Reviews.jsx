/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import NewestView from './NewestView.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.updateState = this.updateState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  handleClick(e) {
    console.log(e.target.title);
    if (e.target.title === 'NEWEST') {
      const arr = this.props.reviews;
      arr.sort((a, b) => Date.parse(b.create_date) - Date.parse(a.create_date));
      this.setState({
        reviews: arr.slice(0, 2),
      });
    }
  }

  updateState() {
    this.setState({
      reviews: this.props.reviews.slice(0, 2),
    });
  }

  render() {
    return (
      <div className="item detail-reviews">
        <div className="top-buttons" onClick={this.handleClick} role="presentation">
          <div>
            <button className="tab-button" type="button" title="NEWEST" value="0">NEWEST</button>
          </div>
          <div>
            <button className="tab-button" type="button" title="HELPFUL" value="1">HELPFUL</button>
          </div>
          <div>
            <button className="tab-button" type="button" title="RELEVANT" value="2">RELEVANT</button>
          </div>
        </div>
        {Object.keys(this.state.reviews).length > 0
        && (<NewestView reviews={this.state.reviews} />) }
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
