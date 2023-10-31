CREATE DATABASE alunos;

CREATE TABLE alunos (
  id serial primary key,
  nome_sobrenome varchar(100) not null,
  usuario varchar(100) not null,
  email varchar(100) not null unique,
  senha text not null
);