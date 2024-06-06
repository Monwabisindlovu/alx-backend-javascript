import { expect } from 'chai';
import { getPaymentTokenFromAPI } from './6-payment_token.js';

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the object {data: "Successful response from the API"} when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});
