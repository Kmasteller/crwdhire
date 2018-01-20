DROP DATABASE IF EXISTS crwdhire_db;
-- Creates the "todolist" database --
CREATE DATABASE crwdhire_db;
USE crwdhire_db;

CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    jobTitle VARCHAR (75) NOT NULL,
    jobLocation VARCHAR (75) NOT NULL,
    jobDescription VARCHAR (240) NULL,
    jobCompany VARCHAR (75) NOT NULL,
    jobCategory INTEGER (2) NOT NULL,
    jobPay INTEGER (9) NULL,
    jobPhone VARCHAR (20) NULL,
    jobContact VARCHAR (75) NULL,
    jobURL VARCHAR (240) NULL,
    jobPartTime BOOLEAN DEFAULT FALSE,
    jobFullTime BOOLEAN DEFAULT TRUE,
    jobUnknownTime BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NULL,
    PRIMARY KEY (id)
);