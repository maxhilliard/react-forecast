import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastDay.css';

const ForecastDay = ({ day }) => (
    <p className={styles.forecastDay}>
        {day}
    </p>
);

ForecastDay.propTypes = {
    day: PropTypes.string.isRequired,
};

export default ForecastDay;
