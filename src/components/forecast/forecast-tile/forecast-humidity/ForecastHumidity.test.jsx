import React from 'react';
import { shallow } from 'enzyme';

import ForecastHumidity from './ForecastHumidity';

describe('ForecastHumidity', () => {
    describe('snapshot', () => {
        it('should match snapshot', () => {
            const wrapper = shallow(<ForecastHumidity humidity={54} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
