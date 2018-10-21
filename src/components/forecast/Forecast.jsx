import React from 'react';
import PropTypes from 'prop-types';

import ForecastTile from './forecast-tile/ForecastTile';

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

const Forecast = ({ forecast: fiveDayForecast }) => (
    <div className={styles.forecastContainer}>
        {
            fiveDayForecast.map((allForecastDataForDay) => {
                const forecastTileProps = selectRelevantForecastKeys(allForecastDataForDay);
                return <ForecastTile key={`forecast-${forecastTileProps.dt}`} {...forecastTileProps} />;
            })
        }
    </div>
);

Forecast.propTypes = {
    forecast: PropTypes.array, // eslint-disable-line
};

Forecast.defaultProps = {
    forecast: [],
};

export default Forecast;
