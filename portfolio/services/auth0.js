import auth0 from 'auth0-js';

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'romaintestard.auth0.com',
      clientID: 'K1FnFg6gWHUFC8Nr5Ba2KLYGnuYrA1bm',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();

export default auth0Client;
