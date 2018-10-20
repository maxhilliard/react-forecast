import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchInput.css';

const SearchInput = ({ value, placeholder, handleInputChange }) => (
    <input
        placeholder={placeholder}
        type="text"
        name="search"
        value={value}
        onChange={handleInputChange}
        className={styles.searchInput}
    />
);

SearchInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    value: '',
    placeholder: 'Enter location',
};

export default SearchInput;
