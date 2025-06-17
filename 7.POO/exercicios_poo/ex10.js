class Livro {
    constructor(titulo, autor, disponivel) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return 'Livro emprestado com sucesso.';
        } else {
            return 'O livro não está disponível para empréstimo.';
        }
    }

    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            return 'O livro já está disponível.';
        } else {
            return 'O livro já estava disponível.';
        }
    }

    consultarDisponibilidade() {
        return this.disponivel ? `Disponível` : `Indisponível`;
    }
}

const livro = new Livro("Dom Casmuro", "Machado de Assis", true);

console.log(livro.emprestar());
console.log(livro.consultarDisponibilidade());
console.log(livro.devolver());