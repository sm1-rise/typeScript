class Aluno {
    nome: string;
    idade: number;
    notas: number[];

    constructor(nome: string, idade: number, notas: number[]) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    calcularMedia(): number {
        if (this.notas.length == 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota,);
        const media = soma / this.notas.length;

        return media;
    }
}

const aluno1 = new Aluno("Jorgim", 18, [6, 7, 10]);

console.log(aluno1);

console.log(aluno1.calcularMedia());



