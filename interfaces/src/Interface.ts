interface IPessoa {
  name: string;
  age: number;
  salutation: (name: string, age: number) => void;
}

const salutation = (name: string, age: number) => {
  console.log(`Hello my names is ${name} i have ${age} years old`);
};

const jhon: IPessoa = {
  age: 25,
  name: "jhon doe",
  salutation: salutation,
};

console.log(jhon.salutation(jhon.name, jhon.age));
