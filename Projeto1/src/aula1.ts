const nome = "leonardo valle";

class Sistem {
  private ip: string;
  constructor(ip: string) {
    this.ip = ip;
  }
}

const server = new Sistem("192.168.0.1");
console.log(nome);
