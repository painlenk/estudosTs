class automovel {
  tipo: string;
  eixo: number;

  constructor(tipo: string, eixo: number) {
    this.tipo = tipo;
    this.eixo = eixo;
  }
}

class classificacao {
  classificacao: string;

  constructor(classificaca: string) {
    this.classificacao = classificaca;
  }
}

interface carro extends automovel, classificacao {
  nome: string;
}

const gol: carro = {
  classificacao: "passeio",
  eixo: 2,
  nome: "gol",
  tipo: "sedan",
};
