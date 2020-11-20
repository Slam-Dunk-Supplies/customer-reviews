/* eslint-disable no-undef */
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Reviews from '../client/src/components/Reviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

const shortExampe = {
  data: [
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-06-21',
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
    }],
};

const sampleReviews = {
  data: [
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-06-21',
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
      create_date: '2020-08-21',
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

const sortedByTime = {
  data: [
    {
      review_id: 1,
      product_id: 1,
      customer_id: 11,
      star_rating: 'five_stars',
      comfort: 'first',
      quality: 'second',
      create_date: '2020-08-21',
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
      create_date: '2020-06-21',
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

const sampleDistribution = {
  five_stars: 1,
  four_stars: 2,
  three: 3,
  two_stars: 1,
  one_stars: 1,
};

describe('Testing reviews.jsx', () => {
  test('should render 3 buttons', () => {
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    expect(wrapper.find('.tab-button')).toHaveLength(3);
  });
  test('should invoke handleClick function when a button is invoked', () => {
    const mockHandleClick = jest.fn();
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().handleClick = mockHandleClick;
    wrapper.instance().forceUpdate();
    wrapper.find('.top-buttons').simulate('click');
    expect(mockHandleClick).toHaveBeenCalled();
  });
  test('if state is changed as exptected after componentDidmount', () => {
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().componentDidMount();
    expect(wrapper).toHaveState({ reviews: sampleReviews.data });
  });
  test('should render more reviews when the show more button is clicked', () => {
    const mockmoreOrDefault = jest.fn();
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().moreOrDefault = mockmoreOrDefault;
    wrapper.instance().forceUpdate();
    wrapper.find('.buttom-buttons').simulate('click');
    expect(mockmoreOrDefault).toHaveBeenCalled();
  });
  test('after clicked newest button, should sort reviews by time order', () => {
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().handleClick({ target: { title: 'NEWEST' } });
    expect(wrapper).toHaveState({ reviews: sortedByTime.data });
  });
  test('after clicked relevent button, should show relevent review', () => {
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().handleClick({ target: { title: 'RELEVANT' } });
    expect(wrapper).toHaveState({ reviews: [] });
  });
  test('after clicked show more button, the showNum state got changed ', () => {
    const wrapper = shallow(<Reviews
      reviews={sampleReviews.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().moreOrDefault({ target: { title: 'SHOW MORE' } });
    expect(wrapper).toHaveState({ showNum: 2 });
  });
  test('pass in a short example and test show more button to see if state got updated properly ', () => {
    const wrapper = shallow(<Reviews
      reviews={shortExampe.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().moreOrDefault({ target: { title: 'SHOW MORE' } });
    expect(wrapper).toHaveState({ showNum: 1 });
  });
  test('pass in a short example to see if state got updated properly ', () => {
    const wrapper = shallow(<Reviews
      reviews={shortExampe.data}
      distribution={sampleDistribution}
    />);
    wrapper.instance().moreOrDefault({ target: { title: 'CLOSE' } });
    expect(wrapper).toHaveState({ showNum: 1 });
  });
});
