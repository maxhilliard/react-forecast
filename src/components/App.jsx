import React, { Component } from 'react';

import getConfig from '../config';

const loadConfig = async () => {
    const config = await getConfig();

    window.config = config;
};

const Loaded = () => (
    <h1>
        Hello World
    </h1>
);
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
        };
    }

    async componentDidMount() {
        await loadConfig();

        this.setState(prevState => ({ ...prevState, isConfigLoaded: true }));
    }

    render() {
        const { isConfigLoaded } = this.state;

        return isConfigLoaded ? <Loaded /> : <Loading />;
    }
}

export default App;
