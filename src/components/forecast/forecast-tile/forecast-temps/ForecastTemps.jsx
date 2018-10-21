import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastTemps.css';

const tempUnit = '°C';

const ForecastTemps = ({ temp }) => {
    const { min: minTemp, max: maxTemp } = temp;

    return (
        <div className={styles.forecastTemps}>
            <p className={styles.textElem}>
                {`Min: ${minTemp}${tempUnit}`}
            </p>
            <p className={styles.textElem}>
                {`Max: ${maxTemp}${tempUnit}`}
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
