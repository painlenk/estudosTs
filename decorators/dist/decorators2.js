"use strict";
//decorators in attributes
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateLength(length) {
    return (target, key) => {
        let name = target[key];
        const getter = () => name;
        const setter = (value) => {
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
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    validateLength(10)
], Game.prototype, "name", void 0);
const game1 = new Game("GTA 5");
console.log(game1.name);
