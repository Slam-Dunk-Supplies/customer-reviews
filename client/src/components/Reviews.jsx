/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CoolTabs from 'react-cool-tabs';
import PropTypes from 'prop-types';
import NewestView from './NewestView.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const newests = this.props.reviews[0];
    this.setState({
      reviews: newests,
    });
  }

  render() {
    return (
      <div className="item detail-reviews">
        {Object.keys(this.state.reviews).length > 0
        && (
          <CoolTabs
            tabKey="1"
            style={{ width: 600, height: 400, background: 'white' }}
            activeTabStyle={{ background: 'white', color: 'black' }}
            unActiveTabStyle={{ background: 'lightgrey', color: 'black' }}
            activeLeftTabBorderBottomStyle={{ background: 'while', height: 2 }}
            activeRightTabBorderBottomStyle={{ background: 'while', height: 2 }}
            tabsBorderBottomStyle={{ background: 'black', height: 2 }}
            leftContentStyle={{ background: 'while' }}
            rightContentStyle={{ background: 'while' }}
            leftTabTitle="Newest"
            rightTabTitle="Relevent"
            leftContent={<NewestView reviews={this.state.reviews} />}
            rightContent={<NewestView reviews={this.state.reviews} />}
            contentTransitionStyle="transform 0.6s ease-in"
            borderTransitionStyle="all 0.6s ease-in"
          />
        )}
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
