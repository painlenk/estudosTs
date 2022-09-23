"use strict";
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var total = document.getElementById("total");
var totalSpan = document.getElementById("total");
var btnSum = document.getElementById("buttonSum");
var btnSub = document.getElementById("buttonSub");
function calc(_a) {
    var num1 = _a.num1, num2 = _a.num2, operation = _a.operation;
    return operation == "Somar" ? num1 + num2 : num1 - num2;
}
btnSum === null || btnSum === void 0 ? void 0 : btnSum.addEventListener("click", function () {
    var totalSum = calc({
        num1: Number(num1.value),
        num2: Number(num2.value),
        operation: "Somar",
    });
    if (!totalSpan)
        return;
    totalSpan.innerText = String(totalSum);
    console.log(total === null || total === void 0 ? void 0 : total.innerText);
});
btnSub === null || btnSub === void 0 ? void 0 : btnSub.addEventListener("click", function () {
    var totalSum = calc({
        num1: Number(num1.value),
        num2: Number(num2.value),
        operation: "Subtrair",
    });
    if (!totalSpan)
        return;
    totalSpan.innerText = String(totalSum);
    console.log(total === null || total === void 0 ? void 0 : total.innerText);
});
