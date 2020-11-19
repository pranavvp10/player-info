import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Players from './components/Players'

describe('testing App', () => {
   it('renders without crashing', () => {
      const wrapper = shallow(<App />);
    });
});

describe('testing Players', () => {
   it('renders without crashing', () => {
      const wrapper = shallow(<Players />);
    });
});