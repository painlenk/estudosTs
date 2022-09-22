//decorators in attributes

function validateLength(length: number) {
  return (target: any, key: string) => {
    let name = target[key];

    const getter = () => name;

    const setter = (value: string) => {
      if (value === "") {
        console.log("not possible create a empity name");
        return;
      }

      if (value.length > length) {
        console.log("the name fulfillment is too big");
        return;
      }

      console.log("the name is accepted");
      name = value;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Game {
  @validateLength(10)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const game1 = new Game("GTA 5");

console.log(game1.name);
