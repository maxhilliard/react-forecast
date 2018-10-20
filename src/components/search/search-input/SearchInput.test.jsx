import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
    describe('snapshot', () => {
        it('should match snapshot', () => {
            const wrapper = shallow(<SearchInput handleInputChange={() => {}} />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('props', () => {
        it('should invoke handleInputChange prop on keypress', () => {
            const handleInputChangeSpy = jest.fn();
            const wrapper = shallow(<SearchInput handleInputChange={handleInputChangeSpy} />);

            const mockKeypressEvent = {
                target: { value: 'the-value' },
            };

            wrapper.find('input').simulate('change', mockKeypressEvent);

            expect(handleInputChangeSpy).toHaveBeenLastCalledWith(mockKeypressEvent);
        });
    });
});
