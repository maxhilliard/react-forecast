import React from 'react';
import { shallow } from 'enzyme';

import ForecastIcon from './ForecastIcon';

describe('ForecastIcon', () => {
    describe('snapshot', () => {
        it('matches snapshot', () => {
            const mockProps = {
                weather: [{
                    icon: 'mock-icon-code',
                    description: 'mock-weather-description',
                }],
            };

            const wrapper = shallow(<ForecastIcon {...mockProps} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
