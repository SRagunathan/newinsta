import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './signup';

describe('<SignUp />', () => {
    test('renders', () => {
        const wrapper = shallow(<SignUp />);
        expect(wrapper).toMatchSnapshot();
    });
});
