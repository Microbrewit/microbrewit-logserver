const Joi = require('joi');

exports.register = function register(server, options, next) {

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => reply.redirect('/documentation'),
        },
        {
            method: 'POST',
            path: '/log',
            config: {
                tags: ['api'],
                description: 'Log an event',
                validate: {
                    payload: Joi.object({
                    }).unknown(true),
                },
                response: {
                    status: {
                        200: Joi.object({
                            statusCode: Joi.number().valid(200).required(),
                            message: Joi.string().required(),
                        }),
                        400: Joi.object({
                            statusCode: Joi.number().valid(400).required(),
                            error: Joi.string().required(),
                            message: Joi.string().required(),
                        }),
                        500: Joi.object({
                            message: Joi.string(),
                            error: Joi.string(),
                            statusCode: Joi.number(),
                        }).unknown(true),
                    },
                },
            },
            handler: (request, reply) => {
                server.log(['microbrew-it-frontend'], request.payload);
                reply({
                    statusCode: 200,
                    message: 'Successfully logged event.',
                });
            },
        },
    ]);

    next();
}

const projectPkg = require('../../package.json');
const pkg = {
    name: 'log-api',
    version: projectPkg.version,
};

exports.register.attributes = {
    pkg,
};
