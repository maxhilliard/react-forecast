import React from 'react';
import PropTypes from 'prop-types';

import ForecastTile from './forecast-tile/ForecastTile';

const selectRelevantForecastKeys = ({
    dt,
    humidity,
    temp,
    weather,
}) => ({
    dt,
    humidity,
    temp,
    weather,
});

const Forecast = ({ forecast: fiveDayForecast }) => fiveDayForecast.map((allForecastDataForDay) => {
    const forecastTileProps = selectRelevantForecastKeys(allForecastDataForDay);

    return <ForecastTile key={`forecast-${forecastTileProps.dt}`} {...forecastTileProps} />;
});

Forecast.propTypes = {
    forecastArr: PropTypes.array,
};

Forecast.defaultProps = {
    forecastArr: [],
};

export default Forecast;
