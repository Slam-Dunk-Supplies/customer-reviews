/* eslint-disable no-undef */
import Enzyme from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
// https://enzymejs.github.io/enzyme/docs/installation/index.html
import Adapter from 'enzyme-adapter-react-16';
// import { TestScheduler } from 'jest';
import React from 'react';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App testing', () => {
  it('should show header', () => {
    const wrapper = Enzyme.shallow(<App />);
    const text = wrapper.find('div h5');
    expect(text.text()).toBe('Ratings & Reviews');
  });
  it('should not render nothing', () => {
    // const wrapper = Enzyme.shallow(<App />);
    const wrapper = Enzyme.mount(<App />);
    expect(wrapper).not.toBeEmptyRender();
  });
});

// const puppeteer = require('puppeteer');
// const pagelUrl = 'http://localhost:3001/';

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(pagelUrl);
//   await page.screenshot({path: '/'});

//   await browser.close();
// })();
