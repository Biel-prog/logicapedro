create database faculdade;
use faculdade;

create table usuarios (
	id int not null auto_increment primary key,
    nome varchar (20) not null,
    sobrenome varchar (20) not null,
	email varchar (255) not null unique,
    curso varchar (5) not null,
    nota_atividade decimal (5,2) not null default 0,
    nota_prova decimal (5,2) not null default 0,
    nota_final decimal (5,2) not null default 0
);

