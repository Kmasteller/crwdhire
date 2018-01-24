DROP DATABASE IF EXISTS crwdhire_db;
-- Creates the "todolist" database --
CREATE DATABASE crwdhire_db;
USE crwdhire_db;

CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    jobTitle VARCHAR (75) NOT NULL,
    jobDescription VARCHAR (240) NULL,
    jobCategory INTEGER (2) NOT NULL,
    jobCompany VARCHAR (75) NOT NULL,
    jobPay INTEGER (9) NULL,
    jobTime INTEGER(1) NOT NULL,
    jobPhone VARCHAR (20) NULL,
    jobContact VARCHAR (75) NULL,
    jobImage2 VARCHAR (3000) NULL,
    jobURL VARCHAR (240) NULL,
    jobInputAddress VARCHAR (100) NULL,
    jobTagCity VARCHAR (50) NULL,
    jobTagCounty VARCHAR (50) NULL,
    jobTagState VARCHAR (50) NULL,
    jobTagAddress VARCHAR (100) NULL,
    createdAt TIMESTAMP NULL,
    updatedAt TIMESTAMP NULL,
    PRIMARY KEY (id)
);