DROP DATABASE IF EXISTS moviesdb;

CREATE DATABASE moviesdb;

USE moviesdb;

CREATE TABLE movies(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(60) NOT NULL,
    watched boolean DEFAULT false,
    PRIMARY KEY(id)
);
