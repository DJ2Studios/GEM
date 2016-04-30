DROP DATABASE IF EXISTS GEM_DB;
CREATE DATABASE GEM_DB;
USE GEM_DB;

create table User (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(100)
);

create table userEventLink (
	user_id INT,
	event_id INT
);

create table comments (
	id INT,
	text TEXT,
	creator_id INT,
	event_id INT,
	reply_id INT,
	rating INT
);

create table event (
	id INT,
	name VARCHAR(50),
	description VARCHAR(255),
	time VARCHAR(50),
	poll_id INT,
	creator_id INT
);

create table poll (
	id INT,
	event_id INT
);

create table slot (
	id INT,
	votes INT,
	start_time VARCHAR(50),
	end_time VARCHAR(50),
	poll_id INT
);

create table settings (
	settings TEXT
);