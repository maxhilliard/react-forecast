import React from 'react';
import { shallow } from 'enzyme';

import Forecast from './Forecast';
import ForecastTile from './forecast-tile/ForecastTile';

describe('Forecast', () => {
    const mockForecast = [
        {
            dt: 'mock-dt',
            humidity: 'mock-humidity',
            temp: 'mock-temp',
            weather: 'mock-weather',
        },
        {
            dt: 'mock-dt',
            humidity: 'mock-humidity',
            temp: 'mock-temp',
            weather: 'mock-weather',
        },
    ];

    const wrapper = shallow(<Forecast forecast={mockForecast} />);

    describe('snapshot', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('props', () => {
        it('should render a ForecastTile component for each item in the forecast array prop', () => {
            const forecastTileNumber = wrapper.find(ForecastTile).length;
            const expectedForecastTileNumber = mockForecast.length;

            expect(forecastTileNumber).toEqual(expectedForecastTileNumber);
        });
    });
});
