/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be a Currency');
    }

    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw TypeError('ConversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
