import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from './forgotpassword';

describe('<ForgotPassword />', () => {
    test('renders', () => {
        const wrapper = shallow(<ForgotPassword />);
        expect(wrapper).toMatchSnapshot();
    });
});
