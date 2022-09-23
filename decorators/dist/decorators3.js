"use strict";
//decorator method is call when the method of class is called
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateAgeUser(age) {
    return (target, key, descriptor) => {
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
    constructor(name) {
        this.name = name;
    }
    whenRegisterUser() {
        console.log(`Wellcome ${this.name} in to the sistem`);
    }
}
__decorate([
    validateAgeUser(18)
], RegisterUser.prototype, "whenRegisterUser", null);
const people1 = new RegisterUser("Leo V.");
people1.whenRegisterUser();
