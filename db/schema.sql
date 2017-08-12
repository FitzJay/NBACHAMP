-- CREATE DATABASE champs_db;

USE nba2_db;

CREATE TABLE players (
	id int AUTO_IMCREMENT,
	player_id VARCHAR(100) NULL,
	status VARCHAR(10) NULL,
	player_name VARCHAR(100) NULL,
	position VARCHAR(10) NULL,
	primary_position(10) NULL,
	experience(10) NULL,
	seasons json,	
	PRIMARY KEY (id)
);