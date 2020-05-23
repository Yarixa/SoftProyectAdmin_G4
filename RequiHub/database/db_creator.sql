drop database if exists test;

create database test;

use test;

create table courses(
	id int primary key auto_increment,
	subject_id varchar(40) not null,
	anio int not null,
	semestre int not null
);

alter table courses auto_increment = 1;