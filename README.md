# react-boilerplate
React boilerplate - dockerised, linted and ready to test

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

- ~~React setup~~
- ~~Styles setup - modules?~~
- Config setup
- ~~Test setup~~
- Dockerise
- ~~Linting~~
- Prettier setup
- Webpack optimisation
- Pre-commit/push hooks
- Group non-application files together - internals dir etc.
- Pre-push/commit hooks