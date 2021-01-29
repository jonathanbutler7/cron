const { pingDashboard, pingNoteful } = require('./helpers');

(async () => {
  await pingDashboard('https://serene-savannah-58732.herokuapp.com/');
  await pingNoteful('https://noteful-deployment.herokuapp.com/');
})();
