import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import ForecastDay from './forecast-day/ForecastDay';
import ForecastIcon from './forecast-icon/ForecastIcon';
import ForecastTemps from './forecast-temps/ForecastTemps';
import ForecastHumidity from './forecast-humidity/ForecastHumidity';

import styles from './ForecastTile.css';

// TODO - move this parsing into util
const parseDayFromUnixTimestamp = timestamp => format(timestamp * 1000, 'ddd');

const ForecastTile = ({
    dt,
    humidity,
    temp,
    weather,
}) => {
    const day = parseDayFromUnixTimestamp(dt);

    return (
        <div className={styles.forecastTile}>
            <ForecastDay day={day} />
            <ForecastIcon weather={weather} />
            <ForecastTemps temp={temp} />
            <ForecastHumidity humidity={humidity} />
        </div>
    );
};

export default ForecastTile;
