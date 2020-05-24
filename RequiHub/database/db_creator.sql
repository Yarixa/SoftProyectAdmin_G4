drop database if exists test;

create database test;

use test;

CREATE TABLE subjects (
  id varchar(25) NOT NULL PRIMARY KEY,
  nombre varchar(40) NOT NULL,
  degree varchar(40) NOT NULL
);

