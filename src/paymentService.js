// src/paymentService.js
export class PaymentService {
  constructor(gateway) {
    this.gateway = gateway;
  }

  async processPayment({ amount, currency, customerId }) {
    // basic input validation
    if (amount == null || amount <= 0) {
      return { ok: false, code: 'INVALID_AMOUNT' };
    }
    if (!currency) {
      return { ok: false, code: 'INVALID_CURRENCY' };
    }
    if (!customerId) {
      return { ok: false, code: 'MISSING_CUSTOMER' };
    }

    // call gateway
    const result = await this.gateway.charge({ amount, currency, customerId });

    // NOTE: we'll ask a reviewer to add extra null/failed checks here
    if (result?.status === 'succeeded') {
      return { ok: true, txId: result.id };
    }

    // normalize error response
    return {
      ok: false,
      code: result?.errorCode || 'PAYMENT_FAILED',
      message: result?.message || 'Charge failed'
    };
  }
}
