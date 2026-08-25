class aluno{
    constructor(nome, idade, matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.`)
    }
}

var aluno1 = new aluno("Ana", 21, "123456");
var aluno2 = new aluno("André", 30, "654321");
var aluno3 = new aluno("Paula", 23, "987654");

aluno1.apresentar();
aluno2.apresentar();
aluno3.apresentar();