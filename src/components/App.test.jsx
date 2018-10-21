import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('The app component', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ isConfigLoaded: true });

        expect(wrapper).toMatchSnapshot();
    });
});
