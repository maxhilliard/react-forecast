import React from 'react';
import PropTypes from 'prop-types';

import { format, parse } from 'date-fns';

const ForecastTile = ({
    dt,
    humidity,
    temp,
    weather,
}) => {
    // TODO - move this to util
    const day = parse(dt);
    console.log('🍕: day', day)
    return null;
};

export default ForecastTile;
