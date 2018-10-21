import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastText.css';

const TEXT_MAP = {
    INSTRUCTIONS: 'Search for a city',
    ERROR: '(◡﹏◡) There was an error with your search',
};

const ForecastText = ({ isForecastError }) => (
    <div className={styles.forecastText}>
        <h2>
            {isForecastError ? TEXT_MAP.ERROR : TEXT_MAP.INSTRUCTIONS}
        </h2>
    </div>
);

ForecastText.propTypes = {
    isForecastError: PropTypes.bool,
};

ForecastText.defaultProps = {
    isForecastError: false,
};

export default ForecastText;
