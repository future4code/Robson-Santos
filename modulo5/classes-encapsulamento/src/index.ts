// exercicio 1
// a) Para executar ações assim que a classe é criada

// b) 1

// c) Elas só podem ser acessadas pela própria classe ou através de getters e setters

import Transaction from "./types";

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
}