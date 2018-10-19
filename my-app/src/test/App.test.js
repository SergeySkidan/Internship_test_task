
import React from 'react';
import App from '../App';
import ClientList from '../components/views/client-list';
import ClientItem from '../components/views/client-list';
import ClientListContainer from '../components/containers/client-list-container';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';



test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('should open a code editor', () => {
    const wrapper = mount(
        <Playground code={code} />
    );

    expect(wrapper.find('.ReactCodeMirror')).toHaveLength(0);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('.ReactCodeMirror')).toHaveLength(1);
});
