type Operacoes = "Somar" | "Subtrair";
interface IOperation {
  num1: number;
  num2: number;
  operation: Operacoes;
}

const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
let total = document.getElementById("total");
const totalSpan = document.getElementById("total");

const btnSum = document.getElementById("buttonSum") as HTMLInputElement;
const btnSub = document.getElementById("buttonSub") as HTMLInputElement;

function calc({ num1, num2, operation }: IOperation) {
  return operation == "Somar" ? num1 + num2 : num1 - num2;
}

btnSum?.addEventListener("click", () => {
  const totalSum = calc({
    num1: Number(num1.value),
    num2: Number(num2.value),
    operation: "Somar",
  });

  if (!totalSpan) return;
  totalSpan.innerText = String(totalSum);
  console.log(total?.innerText);
});

btnSub?.addEventListener("click", () => {
  const totalSum = calc({
    num1: Number(num1.value),
    num2: Number(num2.value),
    operation: "Subtrair",
  });

  if (!totalSpan) return;
  totalSpan.innerText = String(totalSum);
  console.log(total?.innerText);
});
