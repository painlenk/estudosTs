/* function logInfo(message: string) {
  console.log("server is running");

  return (target: any) => {
    console.log(`${message}, ${target} : server is running`);
  };
}

@logInfo("hellow")
class serverTest {} */

function setIp(newIp: string) {
  return (target: any) => {
    return class extends target {
      ip = newIp;
    };
  };
}

@setIp("192.168.0.1")
class Server {}

class Server2 {
  ip: string;

  constructor(ip: string) {
    this.ip = ip;
  }
}

const server1 = new Server();
console.log(server1);

const server2 = new Server2("192.168.000");
console.log(server2);
