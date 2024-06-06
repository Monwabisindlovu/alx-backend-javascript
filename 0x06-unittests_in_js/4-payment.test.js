import { expect } from 'chai';
import sinon from 'sinon';
import { Utils } from './utils.js';
import { sendPaymentRequestToApi } from './4-payment.js';

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM, 100, 20 and log the correct total', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
