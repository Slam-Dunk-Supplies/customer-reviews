import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class NewestView extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { reviews } = this.props;
    console.log('NewestView component is called, reviews: ', reviews);
    return (
      <div>
        content
        {/* {reviews.map((review) => (
          <div>{JSON.stringify(review)}</div>
        ))} */}
        {/* {JSON.stringify(reviews)} */}
      </div>
    );
  }
}

export default NewestView;
