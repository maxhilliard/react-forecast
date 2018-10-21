import React from 'react';
import PropTypes from 'prop-types';

import styles from './ForecastIcon.css';

const constructIconUrl = iconCode => `http://openweathermap.org/img/w/${iconCode}.png`;

const ForecastIcon = ({ icon, description }) => {
    const iconUrl = constructIconUrl(icon);

    return (
        <div className={styles.forecastIcon}>
            <img src={iconUrl} alt={description} />
        </div>
    );
};

ForecastIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ForecastIcon;
