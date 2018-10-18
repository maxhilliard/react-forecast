import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ value, placeholder, handleInputChange }) => (
    <input
        placeholder={placeholder}
        type="text"
        name="search"
        value={value}
        onChange={handleInputChange}
    />
);

SearchInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    value: '',
    placeholder: 'Search',
};

export default SearchInput;
