import React from 'react';
import { shallow } from 'enzyme';
import nock from 'nock';

import Search from './Search';
import SearchButton from './search-button/SearchButton';

describe('Search', () => {
    const wrapper = shallow(<Search handleForecastResponse={() => {}} />);

    beforeEach(() => {
        wrapper.setState({ searchValue: '' });
    });

    describe('snapshot', () => {
        it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('search submission', () => {
        const mockSearchState = {
            searchValue: 'mock-search-value',
        };

        it('should make the expected request for forecast', () => {
            let actualQueryObj;
            const expectedQueryObj = {
                APPID: 'REPLACE_ME',
                mode: 'json',
                q: 'mock-search-value',
                cnt: '5',
                units: 'metric',
            };

            wrapper.setState(mockSearchState);

            nock('http://api.openweathermap.org', { encodedQueryParams: true })
                .get('/data/2.5/forecast/daily')
                .query((queryObj) => { actualQueryObj = queryObj; })
                .reply(200);


            const searchButton = wrapper
                .find(SearchButton)
                .dive()
                .find('button');

            searchButton.simulate('click');

            expect(actualQueryObj).toEqual(expectedQueryObj);
        });

        it('should invoke handleForecastResponse prop upon GET forecast', async () => {
            const handleForecastResponseSpy = jest.fn();
            const wrapper = shallow(
                <Search handleForecastResponse={handleForecastResponseSpy} />,
            );

            const mockForecast = ['mock-forecast'];

            wrapper.setState(mockSearchState);

            nock('http://api.openweathermap.org:80', { encodedQueryParams: true })
                .get('/data/2.5/forecast/daily')
                .query({
                    APPID: 'REPLACE_ME', mode: 'json', q: 'mock-search-value', cnt: '5', units: 'metric',
                })
                .reply(200, { list: mockForecast });

            await wrapper.instance().handleSubmit();

            expect(handleForecastResponseSpy).toHaveBeenLastCalledWith(mockForecast);
        });

        it('should be disabled if there is no searchValue', () => {
            wrapper.setState({
                searchValue: '',
            });

            const searchButtonProps = wrapper
                .find(SearchButton)
                .props();

            const isSearchButtonDisabled = searchButtonProps.isDisabled;

            expect(isSearchButtonDisabled).toBe(true);
        });
    });
});
