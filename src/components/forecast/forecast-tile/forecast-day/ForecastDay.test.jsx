import React from 'react';
import { shallow } from 'enzyme';

import ForecastDay from './ForecastDay';

describe('ForecastDay', () => {
    describe('snapshot', () => {
        it('should match snapshot', () => {
            const wrapper = shallow(<ForecastDay day="mock-day" />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
