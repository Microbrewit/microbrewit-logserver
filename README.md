# microbrewit-logserver
A simple Hapi.js based log server that the microbrewit frontend can log events
to.

The log server is implemented in Node.js and uses some ES6 features. Node >= 5
required. It uses Hapi.js as its framework of choice of ease of development.

## License

MIT. See License file.

## Installation

Clone repository: `git clone git@github.com:Microbrewit/microbrewit-logserver.git`.

Install production dependencies: `npm install --production`.
Install all dependencies: `npm install`

## Running

To run without supervisors: `npm start`.

Use [forever](https://www.npmjs.com/package/forever) or something similar if
you want to run the program continuously even when it crashes. Better yet, use
your OS' inbuilt supervisor. For example Systemd.

A docker image for running the log server in a container is forthcoming.

To run in dev mode use: `npm run watch-source`.

## Documentation

The very simple API is automatically documented with Swagger based on the
routes and Joi validators. Documentation can be found at
[localhost:8080/documentation](http://localhost:8080/documentation) after you
start the server. The host and port may differ if you've set the environment
variables.

## Testing

Currently no tests. Soon to come.

## Docker

Docker image being planned.