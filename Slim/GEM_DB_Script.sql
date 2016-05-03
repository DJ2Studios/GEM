DROP DATABASE IF EXISTS gem;

CREATE DATABASE gem;

USE gem;

create table User (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(25) NOT NULL,
	last_name VARCHAR(25) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	CONSTRAINT User_pk PRIMARY KEY (id)
);

create table userEventLink (
	userID INT NOT NULL AUTO_INCREMENT,
	eventID INT NOT NULL,
	CONSTRAINT userEventLink_pk PRIMARY KEY (userID, eventID)
);

create table comments (
	id INT NOT NULL AUTO_INCREMENT,
	`text` VARCHAR(250) NOT NULL,
	creatorID INT NOT NULL,
	eventID INT NOT NULL,
	replyID INT NULL,
	rating INT NULL,
	CONSTRAINT comments_pk PRIMARY KEY (id)
);

create table event (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	`desc` VARCHAR(250) NOT NULL,
	time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	pollID INT NULL,
	creatorID INT NOT NULL,
	CONSTRAINT event_pk PRIMARY KEY (id)
);

create table poll (
	id INT NOT NULL AUTO_INCREMENT,
	eventID INT NOT NULL,
	CONSTRAINT poll_pk PRIMARY KEY (id)
);

create table slot (
	id INT NOT NULL AUTO_INCREMENT,
	votes INT NOT NULL,
	startTime VARCHAR(50) NOT NULL,
	endTime VARCHAR(50) NOT NULL,
	pollID INT NOT NULL,
	CONSTRAINT slot_pk PRIMARY KEY (id)
);

create table settings (
	settings TEXT NOT NULL
);