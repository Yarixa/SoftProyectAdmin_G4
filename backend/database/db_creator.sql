-- Script para montar la DB
drop database if exists firstApp;

create database firstApp;

use firstApp;

-- Todos los auto_increment's parten en 1.

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

CREATE TABLE subjects (
  id int primary key auto_increment,
  nombre varchar(40) NOT NULL,
  degree varchar(40) NOT NULL,
  disponible int(11) DEFAULT 1
);

-- SELECT 'some text' as '';

create table courses(
	id int primary key auto_increment,
	subject_id int not null,
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
    deleted_at timestamp default current_timestamp,
    disponible boolean default true,
    Foreign key(course_id) references courses(id) on update cascade on delete restrict
);

create table teams(
	id int primary key auto_increment,
	course_id int not null,
	name varchar(40) not null,
	foreign key (course_id) references courses(id) on delete restrict
);

create table memberLists(
	id int primary key auto_increment,
	user_email varchar(40) not null,
	course_id int not null,
	team_id int not null,
	type varchar(15) not null default 'Alumno',
	active boolean not null default true,
	foreign key (user_email) references users(email) on delete restrict,
	foreign key (course_id) references courses(id) on delete restrict,
	foreign key (team_id) references teams(id) on delete restrict
);

insert into users (first_name, last_name, email, role, password, disponible, created) values
	("asdf",	"asdf",	"asdf@asdf.cl",	"Alumno",	"$2b$10$7KMqqhvM3C0AKHLvqYPj8OBgld2Yt66HucKKM3DEjCbIV675HRKki",	1,	"2020-06-21");
insert into subjects (nombre, degree) values ('default', 'default');
insert into courses (subject_id, anio, semestre) values (1, 0, 1);
insert into teams (course_id, name) values (1, 'default');

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
DROP USER if exists 'administrador'@'%';

CREATE USER 'administrador'@'%' IDENTIFIED BY 'abnormalize';

GRANT ALL PRIVILEGES ON firstApp.* TO 'administrador'@'%';
FLUSH PRIVILEGES;

