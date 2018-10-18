import React, { Component } from 'react';

import { loadConfig } from '../config';

import Search from './search/Search';
import Forecast from './forecast/Forecast';

const Loading = () => (
    <h1>
        Loading
    </h1>
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
            <div>
                <Search handleForecastResponse={this.handleForecastResponse} />
                <Forecast forecast={forecast} />
            </div>
        );
    }
}

export default App;
