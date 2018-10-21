import React from 'react';
import { shallow } from 'enzyme';

import SearchButton from './SearchButton';

describe('SearchButton', () => {
    const mockProps = {
        isDisabled: false,
        handleSubmit: () => {},
    };

    const wrapper = shallow(<SearchButton {...mockProps} />);

    describe('snapshot', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('props', () => {
        it('should render buttonText prop as expected', () => {
            const mockButtonText = 'mock-button-text';

            wrapper.setProps({
                ...mockProps,
                buttonText: mockButtonText,
            });

            expect(wrapper.find('button').text()).toEqual(mockButtonText);
        });
    });

    describe('event handling', () => {
        it('should invoke handleSubmit onClick', () => {
            const handleSubmitSpy = jest.fn();
            wrapper.setProps({ handleSubmit: handleSubmitSpy });

            const button = wrapper.find('button');
            button.simulate('click');

            expect(handleSubmitSpy).toHaveBeenCalled();
        });
    });
});
