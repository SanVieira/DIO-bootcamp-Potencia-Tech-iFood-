class ClasseHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "mago" || this.tipo === "Mago") console.log(`O ${this.tipo} atacou usando magia!`);
        else if (this.tipo === "guerreiro" || this.tipo === "Guerreiro") console.log(`O ${this.tipo} atacou usando espada!`);

        else if (this.tipo === "monge" || this.tipo === "Monge") console.log(`O ${this.tipo} atacou usando artes marciais!`);

        else if (this.tipo === "ninja" || this.tipo === "Ninja") console.log(`O ${this.tipo} atacou usando shuriken!`);

        else console.log(`O ${this.tipo} atacou usando suas próprias mãos!`);
    }
}

let player1 = new ClasseHeroi("SanVi'", 22, "monge");
player1.atacar();