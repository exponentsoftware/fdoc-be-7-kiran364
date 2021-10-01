create database Todo_Database;

create table Todo(
    id serial primary key,
    username varchar(20),
    todoTital varchar(255),
    status varchar(10),
    category varchar(10)
);
