const Code = require('code');
const Lab = require('lab');
const logServer = require('../../lib');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

logServer((err, server) => {
    if (err) throw err;

    describe('log-api plugin', () => {
        it('should have /log endpoint that accepts a post request', (done) => {
            const options = {
                method: 'POST',
                url: '/log',
                payload: {
                    level: 'Error',
                    message: 'Error occured while logging in'
                },
            };
            server.inject(options, (response) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('/log endpoint should accept any property', (done) => {
            const options = {
                method: 'POST',
                url: '/log',
                payload: {
                    something: 'Hapi',
                    else: 'Lab',
                    entirely: 'Code'
                },
            };
            server.inject(options, (response) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});