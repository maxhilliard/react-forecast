import React from 'react';
import PropTypes from 'prop-types';

import styles from './searchButton.css';

const SearchButton = ({ buttonText, handleSubmit, isDisabled }) => (
    <button disabled={isDisabled} className={styles.searchButton} type="button" onClick={handleSubmit}>
        {buttonText}
    </button>
);

SearchButton.propTypes = {
    buttonText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

SearchButton.defaultProps = {
    buttonText: 'Search',
};

export default SearchButton;
