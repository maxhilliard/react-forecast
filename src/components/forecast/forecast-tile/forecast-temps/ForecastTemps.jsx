import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastTemps.css';

const tempUnit = '°C';

const ForecastTemps = ({ temp }) => {
    const { min: minTemp, max: maxTemp } = temp;

    return (
        <div className={styles.forecastTemps}>
            <p>
                {`min: ${minTemp}${tempUnit}`}
            </p>
            <p>
                {`max: ${maxTemp}${tempUnit}`}
            </p>
        </div>
    );
};

ForecastTemps.propTypes = {
    temp: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }).isRequired,
};

export default ForecastTemps;
