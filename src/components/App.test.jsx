import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('The app component', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
