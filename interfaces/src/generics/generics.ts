function data<T>() {
  let dados: T;

  function getData() {
    return dados;
  }

  function setData(item: T) {
    dados = item;
  }

  return { getData, setData };
}

const dataNumber = data<number>();
dataNumber.setData(15);
console.log(dataNumber.getData());

const dataString = data<String>();
dataString.setData("texto");
console.log(dataString.getData());
