/* eslint-disable react/jsx-filename-extension */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

const wrapper = Enzyme.shallow(<App/>);

// const puppeteer = require('puppeteer');
// const pagelUrl = 'http://localhost:3001/';

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(pagelUrl);
//   await page.screenshot({path: '/'});

//   await browser.close();
// })();
