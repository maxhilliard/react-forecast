import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastIcon.css';

const constructIconUrl = iconCode => `http://openweathermap.org/img/w/${iconCode}.png`;

const ForecastIcon = ({ weather }) => {
    const { icon: iconCode, description } = weather[0];
    const iconUrl = constructIconUrl(iconCode);

    return (
        <div className={styles.forecastIcon}>
            <img src={iconUrl} alt={description} />
        </div>
    );
};

ForecastIcon.propTypes = {
    weather: PropTypes.array,
};

export default ForecastIcon;
