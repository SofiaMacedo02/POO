class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;       
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`)
    }
}

var pessoa1 = new Pessoa("Sofia", 16, "estudante");
var pessao2  = new Pessoa("Maria", 35, "padeira" );
var pessao3  = new Pessoa("João", 88, "medico" );

pessoa1.apresentar();
pessao2.apresentar();
pessao3.apresentar();
