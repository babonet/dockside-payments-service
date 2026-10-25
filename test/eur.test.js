'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { authorize } = require('../src/payments');

test('authorizes EUR payments', () => {
  assert.equal(authorize({ amount: 10, currency: 'EUR', cardLast4: '1881' }).currency, 'EUR');
});
