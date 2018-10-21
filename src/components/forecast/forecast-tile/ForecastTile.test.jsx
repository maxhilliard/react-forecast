import React from 'react';
import { shallow } from 'enzyme';

import ForecastTile from './ForecastTile';
import ForecastDay from './forecast-day/ForecastDay';

describe('ForecastTile', () => {
    const mockForecastTileProps = {
        dt: 1540078790,
        humidity: 70,
        temp: { min: 12, max: 23 },
        weather: ['mock-weather'],
    };

    const wrapper = shallow(<ForecastTile {...mockForecastTileProps} />);

    describe('snapshot', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('props', () => {
        it('should parse dt from a unix timestamp to a day value', () => {
            const parsedDay = wrapper
                .find(ForecastDay)
                .props()
                .day;

            const expectedDay = 'Sun';

            expect(parsedDay).toEqual(expectedDay);
        });
    });
});
