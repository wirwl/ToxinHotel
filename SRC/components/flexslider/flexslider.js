/* eslint-disable-next-line no-unused-vars */
import flexslider from 'flexslider';

export default class Flexslider {
  constructor(data) {
    this._init(data);
  }

  _init({ rootElementClass, options }) {
    $(rootElementClass).flexslider(options);
  }
}
