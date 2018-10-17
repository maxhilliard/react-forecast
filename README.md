# react-forecast

## Goals

- Allow the user to search for a city
- Render the 5 days weather forecast for that given city displaying:
    - Weather icon
    - Min/max temperature
    - Humidity
- Good test coverage
- Readme
- Dockerise your application
- Auto-complete city search
- Search history?
- Optimise bundle

## Technologies

`React 16` `webpack 4` `eslint` `jest` `enzyme` `CSS modules` `postCSS`

## Dependencies

`yarn` - although `npm` will suffice, it's strongly recommended that you use yarn for dependency management.
`node 8/9/10`
`docker`

## Development

`yarn start` - starts webpack dev server, hot module replacement is enabled.

## Production Build

To only bundle the project: `yarn build`

To bundle *and* dockerise the project: `yarn build-docker-img [YOUR_IMAGE_NAME]`

The production docker image serves the app with nginx running on alpine linux.

## To do list:

- Config setup - GET request
- Webpack optimisation
- Business functionality
- Readme love