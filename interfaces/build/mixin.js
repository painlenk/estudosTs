"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    constructor(tipo, eixo) {
        this.tipo = tipo;
        this.eixo = eixo;
    }
}
class Classificacao {
    constructor(classificacao) {
        this.classificacao = classificacao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
applyMixin_1.applyMixins(Carro, [Classificacao, Automovel]);
const Gol = new Carro("gol");
console.log(Gol);
