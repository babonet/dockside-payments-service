'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { authorize } = require('../src/payments');

test('authorizes a valid card payment', () => {
  const result = authorize({ amount: 42.5, currency: 'USD', cardLast4: '4242' });
  assert.equal(result.status, 'authorized');
  assert.match(result.authorizationId, /^auth_/);
});

test('rejects a non-positive amount', () => {
  assert.throws(() => authorize({ amount: 0, currency: 'USD', cardLast4: '4242' }), /amount must be positive/);
});

test('rejects an unsupported currency', () => {
  assert.throws(() => authorize({ amount: 10, currency: 'JPY', cardLast4: '4242' }), /unsupported currency/);
});
