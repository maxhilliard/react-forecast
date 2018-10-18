import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastTemps.css';

const ForecastTemps = ({ temp }) => {
    const { min: minTemp, max: maxTemp } = temp;

    return (
        <p className={styles.forecastTemps}>
            {minTemp}
            {maxTemp}
        </p>
    );
};

export default ForecastTemps;
