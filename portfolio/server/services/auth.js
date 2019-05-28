const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

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

exports.checkRole = role => (req, res, next) => {
  const user = req.user;
  console.log(user);
  if (user && user[namespace + 'roles'] === role) {
    next();
  } else {
    return res.status(401).send({
      title: 'Not Authorized',
      detail: 'You are not authorized to access this data'
    });
  }
};
