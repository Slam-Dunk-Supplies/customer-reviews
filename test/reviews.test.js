/* eslint-disable no-undef */
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Reviews from '../client/src/components/Reviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

const sampleReviews = {
  data: [
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-09-21',
      category: 'shoes',
      comment: 'Natus aut soluta qui animi et alias. Aliquid eligendi eligendi provident suscipit. Repudiandae quis possimus autem aspernatur repellendus autem repellendus iusto.',
      createdAt: '2020-11-13T06:03:55.000Z',
      updatedAt: '2020-11-13T06:03:55.000Z',
      customer: {
        customer_id: 11,
        name: 'Joseph Rolfson',
        createdAt: '2020-11-13T06:03:55.000Z',
        updatedAt: '2020-11-13T06:03:55.000Z',
      },
    },
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-09-21',
      category: 'shoes',
      comment: 'Natus aut soluta qui animi et alias. Aliquid eligendi eligendi provident suscipit. Repudiandae quis possimus autem aspernatur repellendus autem repellendus iusto.',
      createdAt: '2020-11-13T06:03:55.000Z',
      updatedAt: '2020-11-13T06:03:55.000Z',
      customer: {
        customer_id: 11,
        name: 'Joseph Rolfson',
        createdAt: '2020-11-13T06:03:55.000Z',
        updatedAt: '2020-11-13T06:03:55.000Z',
      },
    },
  ],
};

describe('Testing reviews.jsx', () => {
  test('should render buttons', () => {
    const wrapper = shallow(<Reviews reviews={sampleReviews} />);
    expect(wrapper.find('.tab-button')).toHaveLength(3);
  });
});
