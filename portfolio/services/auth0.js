import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

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
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: 'K1FnFg6gWHUFC8Nr5Ba2KLYGnuYrA1bm'
    });
  }

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }
}

const auth0Client = new Auth0();

export default auth0Client;
