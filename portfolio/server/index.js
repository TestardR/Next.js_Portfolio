const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');

// SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My secret passwords'
  }
];

// DB Config
const db = require('../config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get(
      '/api/v1/onlysiteowner',
      authService.checkJWT,
      authService.checkRole('siteOwner'),
      (req, res) => {
        console.log(req.user);
        return res.json(secretData);
      }
    );

    server.get('*', (req, res) => {
      // console.log('Serving all of the requests!');
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res
          .status(401)
          .send({ title: 'Unauthorized', detail: 'Unauthorized access' });
      }
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
