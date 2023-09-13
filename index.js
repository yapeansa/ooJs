import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Yago', 'yapeansa@gmail.com', '1993-11-21');
// console.log(novoUser.nome);

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.nome);
novoAdmin.nome = 'Clement';
console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', 'g@g.com', '2021-01-02');
console.log(novoDocente.exibirInfos());
