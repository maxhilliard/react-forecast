import React, { Component } from 'react';

import { loadConfig } from '../config';

import Search from './search/Search';
import Forecast from './forecast/Forecast';

// TODO - use react-css-loader
import styles from './App.css';

const Loading = () => (
    <p>
        Loading
    </p>
);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfigLoaded: false,
            isForecastError: false,
            forecast: [],
        };

        this.handleForecastResponse = this.handleForecastResponse.bind(this);
        this.handleErrorResponse = this.handleErrorResponse.bind(this);
    }

    async componentDidMount() {
        await loadConfig();

        this.setState(prevState => ({ ...prevState, isConfigLoaded: true }));
    }

    handleForecastResponse(forecast) {
        this.setState(prevState => ({
            ...prevState,
            forecast,
            isForecastError: false,
        }));
    }

    handleErrorResponse() {
        this.setState(prevState => ({
            ...prevState,
            isForecastError: true,
        }));
    }

    render() {
        const { isConfigLoaded, forecast, isForecastError } = this.state;

        if (!isConfigLoaded) return <Loading />;

        return (
            <div className={styles.container}>
                <Forecast isForecastError={isForecastError} forecast={forecast} />
                <Search
                    handleErrorResponse={this.handleErrorResponse}
                    handleForecastResponse={this.handleForecastResponse}
                />
            </div>
        );
    }
}

export default App;
