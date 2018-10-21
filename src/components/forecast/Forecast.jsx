import React from 'react';
import PropTypes from 'prop-types';

import ForecastTile from './forecast-tile/ForecastTile';
import ForecastText from './forecast-text/ForecastText';

import styles from './Forecast.css';

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

const renderForecastTiles = (allForecastDataForDay) => {
    const forecastTileProps = selectRelevantForecastKeys(allForecastDataForDay);
    return <ForecastTile key={`forecast-${forecastTileProps.dt}`} {...forecastTileProps} />;
};

const Forecast = ({ forecast: fiveDayForecast, isForecastError }) => {
    const shouldRenderText = !fiveDayForecast.length || isForecastError;
    const shouldRenderForecast = !!fiveDayForecast.length && !isForecastError;

    return (
        <div className={`${styles.forecastContainer} ${shouldRenderText ? styles.verticalCenter : ''}`}>
            {shouldRenderText && <ForecastText isForecastError={isForecastError} />}
            {shouldRenderForecast && fiveDayForecast.map(renderForecastTiles)}
        </div>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.array, // eslint-disable-line
    isForecastError: PropTypes.bool,
};

Forecast.defaultProps = {
    forecast: [],
    isForecastError: false,
};

export default Forecast;
