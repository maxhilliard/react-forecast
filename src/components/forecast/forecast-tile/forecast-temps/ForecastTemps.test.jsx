import React from 'react';
import { shallow } from 'enzyme';

import ForecastTemps from './ForecastTemps';

describe('ForecastTemps', () => {
    describe('snapshot', () => {
        it('should match snapshot', () => {
            const mockProps = {
                temp: {
                    min: 12,
                    max: 21,
                },
            };

            const wrapper = shallow(<ForecastTemps {...mockProps} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
