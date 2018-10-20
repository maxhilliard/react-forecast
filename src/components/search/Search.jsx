import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchInput from './search-input/SearchInput';
import SearchButton from './search-button/SearchButton';

import { getForecast } from '../../services/forecast/forecastService';

import styles from './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { value: searchValue } = e.target;

        this.setState(prevState => ({
            ...prevState,
            searchValue,
        }));
    }

    async handleSubmit() {
        const { searchValue } = this.state;
        const { handleForecastResponse } = this.props;

        const { list: forecast } = await getForecast(searchValue);

        handleForecastResponse(forecast);
    }

    render() {
        const { searchValue } = this.state;

        return (
            <div className={styles.searchContainer}>
                <SearchInput handleInputChange={this.handleInputChange} value={searchValue} />
                <SearchButton isDisabled={!searchValue.length} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

Search.propTypes = {
    handleForecastResponse: PropTypes.func.isRequired,
};

export default Search;
