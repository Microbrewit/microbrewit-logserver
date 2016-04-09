const composer = require('./lib');

composer((err, pack) => {
    if (err) {
        console.error('Failed to start server.'); // eslint-disable-line no-console
        console.error('server.register err: ', err); // eslint-disable-line no-console
    }
    pack.start(() => {
        const apiInfo = pack.info.uri.toLowerCase();
        pack.log([], `✅  Server is listening on ${apiInfo}`);
    });
});