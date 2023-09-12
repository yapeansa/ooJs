const user  = {
    nome: 'Rebeca',
    email: 'becapeansa@gmail.com',
    nascimento: '1993/11/21',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: 'Mariana',
    email: 'mari@gmail.com',
    nascimento: '1994/04/14',
    role: 'admin',
    ativo: true,
    criarCurso() {
        console.log('Curso criado!');
    }
};

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();
