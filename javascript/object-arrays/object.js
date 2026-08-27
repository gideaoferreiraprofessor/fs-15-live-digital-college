const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    admin: false,
    genero: "Masculino",
    email: "joaopedefeijao@gmail.com",
};

pessoa.estadoCivil = "Lascado"
delete pessoa.email

pessoa.nome = "Pedro"

console.log(pessoa)