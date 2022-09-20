CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;
CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));

DESC people;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;


INSERT INTO people(name) values('Elon');
INSERT INTO people(name) values('Bill');
INSERT INTO people(name) values('Jeff');
