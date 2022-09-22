"use strict";
function data() {
    let dados;
    function getData() {
        return dados;
    }
    function setData(item) {
        dados = item;
    }
    return { getData, setData };
}
const dataNumber = data();
dataNumber.setData(15);
console.log(dataNumber.getData());
const dataString = data();
dataString.setData("texto");
console.log(dataString.getData());
