class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;       
    }

    apresentar(){
        console.log(`${this.nome}: Preço: ${this.preco} reais Descrição: ${this.descricao}.`)
    }
}

var produto1 = new Produto("Caderno", 15, "caderno de 10 materias do Batman");


produto1.apresentar();
