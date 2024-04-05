export default class Product {
  constructor(key, name,price,originalPrice = null,discount = null) {
    this._key = key;
    this._name = name;
    this._price = price;
    this._originalPrice = originalPrice;
    this._discount = discount;
  }
  get key() {
    return this._key;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get discount(){
    return this._discount;
  }
  get originalPrice(){
    return this._originalPrice;
  }

}