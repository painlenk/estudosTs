import { applyMixins } from "./mixin/applyMixin";

class Automovel {
  tipo: string;
  eixo: number;

  constructor(tipo: string, eixo: number) {
    this.tipo = tipo;
    this.eixo = eixo;
  }
}

class Classificacao {
  classificacao: string;

  constructor(classificacao: string) {
    this.classificacao = classificacao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

applyMixins(Carro, [Classificacao, Automovel]);

const Gol = new Carro("gol");

console.log(Gol);
