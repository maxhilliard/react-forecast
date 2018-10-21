import React from 'react';
import PropTypes from 'prop-types';

import styles from '../ForecastTile.css';

const ForecastHumidity = ({ humidity }) => (
    <p className={styles.forecastHumidity}>
        Humidity:
        {humidity}
        %
    </p>
);

ForecastHumidity.propTypes = {
    humidity: PropTypes.number.isRequired,
};

export default ForecastHumidity;
