create table developer (
	id serial primary key,
	email varchar(255),
	first_name varchar(512),
	item varchar(255),
	quantity integer,
	total_price decimal
);

insert into developer (email, first_name, item, quantity, total_price) values ('tommy@mail.com','Tommy Bejo','Barang 1',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('joko@mail.com','Joko Budi','Barang 2',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('jusuf@mail.com','Jusuf fadil','Barang 3',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('tommy@mail.com','Tommy Bejo','Barang 2',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('camat@mail.com','Camat Matamata','Barang 5',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('andre@mail.com','Andre Ibnu','Barang 6',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('dika@mail.com','Shadika','Barang 7',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('mutia@mail.com','Mutia Permatasari','Barang 8',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('tantri@mail.com','Tantri Kotak','Barang 9',1,200000);
insert into developer (email, first_name, item, quantity, total_price) values ('mita@mail.com','Mita Paramita','Barang 10',1,200000);
