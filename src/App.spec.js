
/**
 * @jest-environment node
*/

import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import App from './App'

Enzyme.configure({ adapter: new Adapter() });

test('App should render without crashing', () => {
  const app = shallow(<App/>);
  expect(app).toBeTruthy();
});