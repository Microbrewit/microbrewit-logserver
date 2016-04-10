const Code = require('code');
const Lab = require('lab');
const logServer = require('../lib');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

// Test that the server is created with the current glue manifest
describe('Log server', () => {
    it('can be started', (done) => {
        logServer((err, server) => {
            expect(err).to.not.exist();
            expect(server).to.exist();
            expect(server.info.host).to.equal('localhost');
            expect(server.info.port).to.equal(8080);
            done();
        });
    });
});
