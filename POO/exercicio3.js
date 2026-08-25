class ContaBancaria {
    constructor(titular, saldo, agencia) {
        this.titular = titular;
        this.saldo = saldo;
        this.agencia = agencia;
    }

    apresentar() {
        console.log(`Titular: ${this.titular} | Agência: ${this.agencia}`);
    }

    consultarSaldo() {
        console.log(`O saldo da conta de ${this.titular} é R$ ${this.saldo}.`);
    }
}

var conta = new ContaBancaria("Sofia", 80000.00, "9101");

conta.apresentar();
conta.consultarSaldo();