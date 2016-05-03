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

insert into User (first_name, last_name, email, password) values('Drew', 'Fulsom', 'afulsom@smu.edu', 'password');
insert into User (first_name, last_name, email, password) values('JD', 'Francis', 'jdsemail@smu.edu', 'password');
insert into User (first_name, last_name, email, password) values('David', 'Kim', 'davidsemail@smu.edu', 'password');
insert into User (first_name, last_name, email, password) values('Justin', 'Suh', 'justinsemail@smu.edu', 'password');

insert into event (name, `desc`, creatorID) values ('Presentation', 'Presentation for this class', 1);
insert into event (name, `desc`, creatorID) values ('Torchys', 'Getting food with the group', 2);
insert into event (name, `desc`, creatorID) values ('Some other event', 'I got bored with coming up with events', 1);

insert into userEventLink values (1, 1);
insert into userEventLink values (2, 1);
insert into userEventLink values (3, 1);
insert into userEventLink values (4, 1);
insert into userEventLink values (2, 2);
insert into userEventLink values (3, 2);
insert into userEventLink values (4, 2);
insert into userEventLink values (1, 3);
insert into userEventLink values (4, 3);


