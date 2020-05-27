drop database if exists test;

create database test;

use test;

create table courses(
	id int primary key,
	subject_id varchar(25) not null, --referencia a la tabla subjects(id)
	anio int not null,
	semestre int not null,
);