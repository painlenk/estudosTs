"use strict";
var EnCurrency;
(function (EnCurrency) {
    EnCurrency["BRL"] = "BRL";
    EnCurrency["USD"] = "USD";
})(EnCurrency || (EnCurrency = {}));
function payment(value, currency) {
    console.log(`payment successful : value ${value}${currency}`);
}
payment(299.9, EnCurrency.BRL);
