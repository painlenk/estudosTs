"use strict";
/* function logInfo(message: string) {
  console.log("server is running");

  return (target: any) => {
    console.log(`${message}, ${target} : server is running`);
  };
}

@logInfo("hellow")
class serverTest {} */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function setIp(newIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = newIp;
            }
        };
    };
}
let Server = class Server {
};
Server = __decorate([
    setIp("192.168.0.1")
], Server);
class Server2 {
    constructor(ip) {
        this.ip = ip;
    }
}
const server1 = new Server();
console.log(server1);
const server2 = new Server2("192.168.000");
console.log(server2);
