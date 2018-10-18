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
            forecast: [],
        };

        this.handleForecastResponse = this.handleForecastResponse.bind(this);
    }

    async componentDidMount() {
        await loadConfig();

        this.setState(prevState => ({ ...prevState, isConfigLoaded: true }));
    }

    handleForecastResponse(forecast) {
        this.setState(prevState => ({
            ...prevState,
            forecast,
        }));
    }

    render() {
        const { isConfigLoaded, forecast } = this.state;

        if (!isConfigLoaded) return <Loading />;

        return (
            <div className={styles.container}>
                <Forecast forecast={forecast} />
                <Search handleForecastResponse={this.handleForecastResponse} />
            </div>
        );
    }
}

export default App;
