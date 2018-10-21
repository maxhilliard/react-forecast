import apiFetch from '../api/apiService';
import { selectValuesFromConfig } from '../../config';

export const constructForecastReqUrl = (searchTerm = 'London', daysCount = 5) => {
    const { apiBaseUrl, apiKey } = selectValuesFromConfig(['apiBaseUrl', 'apiKey']);

    if (!apiBaseUrl || !apiKey) throw new Error('Missing weather api config');

    return `${apiBaseUrl}?APPID=${apiKey}&mode=json&q=${searchTerm}&cnt=${daysCount}&units=metric`;
};

export const getForecast = (searchTerm, daysCount = 5) => {
    if (!searchTerm) throw new Error('Missing searchTerm parameter');

    const forecastRequestUrl = constructForecastReqUrl(searchTerm, daysCount);

    return apiFetch(forecastRequestUrl);
};
