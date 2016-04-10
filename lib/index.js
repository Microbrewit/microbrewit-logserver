'use strict';

const Glue = require('glue');
const Package = require('../package.json');

const internals = {
    manifest: {
        connections: [
            {
                host: process.env.LOG_SERVER_HOST || 'localhost',
                port: process.env.LOG_SERVER_PORT || 8080,
                labels: ['api'],
            }
        ],
        registrations: [
            {
                plugin: {
                    register: 'good',
                    options: {
                        opsInterval: 1000,
                        reporters: [
                            {
                                reporter: require('good-console'),
                                events: process.env.node_env === 'production' ?
                                    { log: '*', response: '*' } : {},
                            },
                        ],
                    },
                },
            },
            { plugin: { register: 'inert' } },
            { plugin: { register: 'vision' } },
            {
                plugin: {
                    register: 'hapi-swagger',
                    options: {
                        info: {
                            title: 'Microbrew.it Log Server',
                            description: `${Package.name}:${Package.version} - ${Package.description}`,
                            version: `v${Package.version.split('.')[0]}`,
                        },
                    },
                },
            },
            {
                plugin: {
                    register: './log-api',
                }
            }
        ]
    }
};

module.exports = Glue.compose.bind(Glue, internals.manifest, { relativeTo: __dirname });
