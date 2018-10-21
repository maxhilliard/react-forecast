import nock from 'nock';
import { constructForecastReqUrl, getForecast } from './forecastService';
import * as configSelectors from '../../config';

describe('forecastService', () => {
    describe('getForecast', () => {
        describe('error handling', () => {
            it('should throw the expeced error given searchTerm param is not passed', () => {
                const expectedError = new Error('Missing searchTerm parameter');
                const actualError = () => {
                    getForecast();
                };

                expect(actualError).toThrowError(expectedError);
            });
        });

        describe('forecast request', () => {
            it('should make the expected http request', async () => {
                let isExpectedRequestCompleted;

                nock('http://api.openweathermap.org:80', { encodedQueryParams: true })
                    .get('/data/2.5/forecast/daily')
                    .query({
                        APPID: 'REPLACE_ME', mode: 'json', q: 'mock-search-term', cnt: '5', units: 'metric',
                    })
                    .reply(200, () => {
                        isExpectedRequestCompleted = true;
                        return { mock: 'payload' };
                    });

                await getForecast('mock-search-term');

                expect(isExpectedRequestCompleted).toBe(true);
            });
        });
    });

    describe('constructForecastReqUrl', () => {
        describe('return value', () => {
            it('should construct the expected url given searchTerm and daysCount params', () => {
                const mockSearchTerm = 'mock-city';
                const mockDaysCount = 6;

                const forecastReqUrl = constructForecastReqUrl(mockSearchTerm, mockDaysCount);
                const expectedForecastReqUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=REPLACE_ME&mode=json&q=mock-city&cnt=6&units=metric';

                expect(forecastReqUrl).toEqual(expectedForecastReqUrl);
            });

            it('should construct the expected url given no params are passed', () => {
                const forecastReqUrl = constructForecastReqUrl();
                const expectedForecastReqUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=REPLACE_ME&mode=json&q=London&cnt=5&units=metric';

                expect(forecastReqUrl).toEqual(expectedForecastReqUrl);
            });
        });

        describe('error handling', () => {
            it('should throw the expected error given required config is missing', () => {
                configSelectors.selectValuesFromConfig = () => ({ apiBaseUrl: undefined, apiKey: undefined });

                const expectedError = new Error('Missing weather api config');
                const actualError = () => {
                    constructForecastReqUrl();
                };

                expect(actualError).toThrowError(expectedError);
            });
        });
    });
});
