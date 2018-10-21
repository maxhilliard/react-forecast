# react-forecast

## Goals
- Allow the user to search for a city
- Render the 5 days weather forecast for that given city displaying:
    - Weather icon
    - Min/max temperature
    - Humidity
- Good test coverage
- Dockerise your application
- Auto-complete city search
- Search history?

## Technologies
Cloned from my own [React Boilerplate](https://github.com/maxhilliard/react-boilerplate)

`React 16` `webpack 4` `eslint` `jest` `enzyme` `CSS modules` `postCSS` `Docker`

## Dependencies

`yarn` - although `npm` will suffice, it's strongly recommended that you use yarn for dependency management.
`node 8/9/10`
`docker`

## Development
clone this repo `git clone https://github.com/maxhilliard/react-forecast.git`

Install dependencies: `yarn install`

Start webpack dev server: `yarn start`

Navigate to [localhost:9000](http://localhost:9000)

## Production Build

The production docker image serves the app with nginx running on alpine linux.

To only bundle the project: `yarn build`

To bundle *and* dockerise the project: `yarn build-docker-img [YOUR_IMAGE_NAME]`

*N.B. - if param [YOUR_IMAGE_NAME] is not passed, image will be named react-forecast-img by default*

To run the container, _a config file_ `config.json` _must be mounted_ to `/usr/share/nginx/html/config/config.json`

An example run command would serve the app on port 80 and mount the development config for testing purposes:

`docker run -d -p 80:80 -v $(pwd)/src/config/config.json:/usr/share/nginx/html/config/config.json --name [YOUR_CONTAINER_NAME] [YOUR_IMAGE_NAME]

Navigate to [localhost:80](http://localhost:80)

*N.B. For the above to work, add a valid API key to ./src/config/config.json*

## Testing
To run tests: `yarn test`

## Improvements

- Search History - would potentially merit Redux
- Autocomplete search
- Enum for errors
- Implement react css loader
- Bundle optimization