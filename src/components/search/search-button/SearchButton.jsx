import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ buttonText, handleSubmit }) => (
    <button type="button" onClick={handleSubmit}>
        {buttonText}
    </button>
);

SearchButton.propTypes = {
    buttonText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
    buttonText: 'Search',
};

export default SearchButton;
