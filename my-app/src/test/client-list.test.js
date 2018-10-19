

import React from 'react';

import ClientList from '../components/views/client-list';
import ClientItem from '../components/views/client-list';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
configure({ adapter: new Adapter() });



test('renders correctly', () => {
  const tree = renderer.create(<ClientList />).toJSON();
  expect(tree).toMatchSnapshot();
});
