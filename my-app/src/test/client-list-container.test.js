
import React from 'react';

import ClientList from '../components/views/client-list';
import ClientItem from '../components/views/client-list';
import ClientListContainer from '../components/containers/client-list-container';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
configure({ adapter: new Adapter() });



it("should create an entry in component state", () => {
    const component = shallow(<ClientListContainer />);
    const form = component.find('input');
    form.props().onChange({target: {
       value: 'myValue'
    }});
    expect(component.state('input')).toBeDefined();
});
