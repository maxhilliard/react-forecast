import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search', () => {
    describe('snapshot', () => {
        it('should match snapshot', () => {
            const componentShallow = shallow(<Search handleForecastResponse={() => {}} />);

            expect(componentShallow).toMatchSnapshot();
        });
    });
});
