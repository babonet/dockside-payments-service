'use strict';

const { randomUUID } = require('node:crypto');

const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'ILS'];

function badRequest(message) {
  return Object.assign(new Error(message), { status: 400 });
}

function authorize({ amount, currency, cardLast4 } = {}) {
  if (!(amount > 0)) throw badRequest('amount must be positive');
  if (!SUPPORTED_CURRENCIES.includes(currency)) throw badRequest(`unsupported currency ${currency}`);
  if (!/^\d{4}$/.test(String(cardLast4 ?? ''))) throw badRequest('cardLast4 must be 4 digits');

  return {
    status: 'authorized',
    authorizationId: `auth_${randomUUID().slice(0, 8)}`,
    amount: Math.round(amount * 100) / 100,
    currency,
  };
}

module.exports = { authorize, SUPPORTED_CURRENCIES };
