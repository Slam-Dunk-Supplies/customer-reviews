/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlClicked = this.handlClicked.bind(this);
  }

  handlClicked(e) {
    console.log(e.target.value);
    this.props.clicked(e.target.value);
  }

  render() {
    const { ratingDistribution } = this.props;
    const starsCount = {
      one_stars: 1, two_stars: 2, three_stars: 3, four_stars: 4, five_stars: 5,
    };
    const arr = [];
    for (const key in ratingDistribution) {
      arr.push([starsCount[key], ratingDistribution[key], key]);
    }
    console.log(arr);

    return (
      <div>
        {arr.map((pair) => (
          <button key={pair[0]} type="button" className="breakdown-button" onClick={this.handlClicked} value={pair[2]}>
            {pair[0]}
            <span>&#9733;</span>
            : &nbsp;&nbsp;
            {pair[1]}
            &nbsp;Reviews
          </button>
        ))}
      </div>
    );
  }
}

RatingBreakdown.propTypes = {
  ratingDistribution: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default RatingBreakdown;
