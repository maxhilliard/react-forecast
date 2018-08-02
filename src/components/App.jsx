import React from 'react';
import PropTypes from 'prop-types';

import styles from './app.css';

const App = ({ headerContent }) => (
    <div>
        <h1 className={styles.heading}>
            {headerContent}
        </h1>
    </div>
);

App.propTypes = {
    headerContent: PropTypes.string,
};

App.defaultProps = {
    headerContent: 'Hello',
};

export default App;
