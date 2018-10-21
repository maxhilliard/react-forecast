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
    const { icon, description } = weather[0];

    return (
        <div className={styles.forecastTile}>
            <ForecastDay day={day} />
            <ForecastIcon icon={icon} description={description} />
            <ForecastTemps temp={temp} />
            <ForecastHumidity humidity={humidity} />
        </div>
    );
};

ForecastTile.propTypes = {
    dt: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temp: PropTypes.objectOf(PropTypes.number).isRequired,
    weather: PropTypes.array.isRequired, // eslint-disable-line
};

export default ForecastTile;
