import React from 'react';
import PropTypes from 'prop-types';

const App = ({ headerContent }) => (
    <div>
        <h1>
            {headerContent}
        </h1>
    </div>
);

App.propTypes = {
    headerContent: PropTypes.string,
};

App.defaultProps = {
    headerContent: '',
};

export default App;
