class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;       
    }

    apresentar(){
        console.log(`${this.nome}: Preço:${this.preco} Descrição: ${this.profissao}.`)
    }
}

var pessoa1 = new Pessoa("Sofia", 16, "estudante");
var pessao2  = new Pessoa("Maria", 35, "padeira" );
var pessao3  = new Pessoa("João", 88, "medico" );

pessoa1.apresentar();
pessao2.apresentar();
pessao3.apresentar();
