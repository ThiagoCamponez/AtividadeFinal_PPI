create database backendcadcolab;

use backendcadcolab;

create table backendcadcolab.colaborador(
	id int not null auto_increment,
    nome varchar(40) not null,
    cpf varchar(14) not null,
    contato varchar(14) not null,
    endereco varchar(30) not null,
    bairro varchar(15) not null,
    numero varchar(5) not null,
    datanascimento date not null,
    cargo varchar(20) not null,
    areaatuacao varchar(20) not null,
    anosexperiencia int not null,
    nivelescolaridade varchar(20) not null,
    constraint pk_colaborador
		primary key (id, cpf)
);

desc cadastrocolaboradores;

select * from backendcadcolab.colaborador;

drop table backendcadcolab.colaborador;

