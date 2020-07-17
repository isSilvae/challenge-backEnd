DROP DATABASE IF EXISTS challenge;
CREATE DATABASE challenge;

CREATE TABLE post(
	id SERIAL PRIMARY KEY,
	name VARCHAR (50)  NOT NULL,
	description VARCHAR (100) NOT NULL
);

INSERT INTO post (name,description) 
       VALUES('POST 1','i am a description');
INSERT INTO post (name,description) 
       VALUES('POST 2','dummy description');
INSERT INTO post (name,description) 
       VALUES('POST 3','post description');