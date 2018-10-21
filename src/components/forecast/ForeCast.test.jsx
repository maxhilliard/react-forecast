import React from 'react';
import { shallow } from 'enzyme';

import Forecast from './Forecast';
import ForecastTile from './forecast-tile/ForecastTile';
import ForecastText from './forecast-text/ForecastText';

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
            const forecastTileCount = wrapper.find(ForecastTile).length;
            const expectedForecastTileCount = mockForecast.length;

            expect(forecastTileCount).toEqual(expectedForecastTileCount);
        });

        it('should render a ForecastText component if there is no forecast', () => {
            wrapper.setProps({ forecast: [] });
            const forecastTextCount = wrapper.find(ForecastText).length;
            const expectedForecastTextCount = 1;

            expect(forecastTextCount).toEqual(expectedForecastTextCount);
        });

        it('should render a ForecastText component if isForecastError prop is truthy', () => {
            wrapper.setProps({ isForecastError: true });
            const forecastTextCount = wrapper.find(ForecastText).length;
            const expectedForecastTextCount = 1;

            expect(forecastTextCount).toEqual(expectedForecastTextCount);
        });
    });
});
