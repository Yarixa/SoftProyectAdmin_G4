drop database if exists firstApp;

create database firstApp;

use firstApp;

CREATE TABLE subjects (
  id varchar(25) NOT NULL PRIMARY KEY,
  nombre varchar(40) NOT NULL,
  degree varchar(40) NOT NULL,
  disponible int(11) DEFAULT 1
);

