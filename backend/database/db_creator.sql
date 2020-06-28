-- Script para montar la DB
drop database if exists firstApp;

create database firstApp;

use firstApp;

create table users(
	id int primary key auto_increment,
	first_name varchar(40) default '' not null,
	last_name varchar(40) default '' not null,
	email varchar(40) default '' not null unique,
	role varchar(20) default '' not null,
	password text not null,
	disponible boolean not null default true,
	created date
);

alter table users auto_increment = 1;

CREATE TABLE subjects (
  id int PRIMARY KEY auto_increment,
  nombre varchar(40) NOT NULL unique,
  degree varchar(40) NOT NULL,
  disponible int(11) DEFAULT 1
);

create table courses(
	id int primary key auto_increment,
	subject_id varchar(25) not null,
	anio int not null,
	semestre int not null,
	disponible boolean DEFAULT true,

    Foreign key(subject_id) references subjects(id) on update cascade on delete restrict
);

create table projects(
	id int primary key auto_increment,
    course_id int not null,
    nombre varchar(40) not null,
    descripcion varchar(1000) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    disponible boolean default true,
    Foreign key(course_id) references courses(id) on update cascade on delete restrict
);

-- Separado el crear un usuario de la asignacion de privilegios, para evitar problemas.
DROP USER 'administrador'@'%';

CREATE USER 'administrador'@'%' IDENTIFIED BY 'abnormalize';

GRANT ALL PRIVILEGES ON firstApp.* TO 'administrador'@'%';
FLUSH PRIVILEGES;

