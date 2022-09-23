//decorator method is call when the method of class is called

function validateAgeUser(age: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      if (age < 18) {
        console.log("registed as a minor");
      }
      if (age >= 18) {
        console.log("registed");
      }
      return originalMethod.apply(this);
    };
  };
}

class RegisterUser {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @validateAgeUser(18)
  whenRegisterUser() {
    console.log(`Wellcome ${this.name} in to the sistem`);
  }
}

const people1 = new RegisterUser("Leo V.");
people1.whenRegisterUser();
