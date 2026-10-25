'use strict';

const { authorize } = require('./payments');
const pkg = require('../package.json');

const routes = [
  {
    method: 'POST',
    match: (path) => (path === '/payments/authorize' ? {} : null),
    handler: async ({ body }) => ({ status: 200, body: authorize(body) }),
  },
];

module.exports = { service: pkg.name, version: pkg.version, routes };
