const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: 'https://romaintestard.auth0.com/.well-known/jwks.json'
  }),
  audience: 'K1FnFg6gWHUFC8Nr5Ba2KLYGnuYrA1bm',
  issuer: 'https://romaintestard.auth0.com/',
  algorithms: ['RS256']
});
