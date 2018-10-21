import React from 'react';
import { shallow } from 'enzyme';

import ForecastText from './ForecastText';

describe('ForecastText', () => {
    const wrapper = shallow(<ForecastText />);

    describe('snapshot', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('props', () => {
        it('should render the expected text given isForecastError prop is falsy', () => {
            const expectedText = 'Search for a city';
            const actualText = wrapper.find('h2').text();

            expect(actualText).toEqual(expectedText);
        });

        it('should render the expected text given isForecastError prop is truthy', () => {
            wrapper.setProps({
                isForecastError: true,
            });

            const expectedText = '(◡﹏◡) There was an error with your search';
            const actualText = wrapper.find('h2').text();

            expect(actualText).toEqual(expectedText);
        });
    });
});
