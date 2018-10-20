import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('The app component', () => {
    it('should match snapshot', () => {
        const componentShallow = shallow(<App />);
        componentShallow.setState({ isConfigLoaded: true });

        console.log('🍕: componentShallow.debug()', componentShallow.debug());

        expect(componentShallow).toMatchSnapshot();
    });
});
