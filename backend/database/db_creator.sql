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
  id varchar(25) NOT NULL PRIMARY KEY,
  nombre varchar(40) NOT NULL,
  degree varchar(40) NOT NULL,
  disponible int(11) DEFAULT 1
);

create table courses(
	id int primary key auto_increment,
	subject_id varchar(25) not null,
	anio int not null,
	semestre int not null,
	disponible boolean DEFAULT true
);

create table documents(
	id int primary key auto_increment,
	projectID int not null,
	sectionType varchar(25) NOT NULL,
	content varchar(1000) NOT NULL,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp,
	deleted_at timestamp default current_timestamp,
	disponible boolean default true
);

-- Separado el crear un usuario de la asignacion de privilegios, para evitar problemas.
DROP USER 'administrador'@'%';

CREATE USER 'administrador'@'%' IDENTIFIED BY 'abnormalize';

GRANT ALL PRIVILEGES ON firstApp.* TO 'administrador'@'%';
FLUSH PRIVILEGES;