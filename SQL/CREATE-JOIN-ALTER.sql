CREATE TABLE book(
	id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	page_number INTEGER NOT NULL,
	author_id INTEGER REFERENCES author(id)
)

select *from book
select count(*)from author

SELECT book.id AS "KITAP ID",
	   book.title AS "KITAP ADI", 
	   CONCAT(author.first_name,' ',author.last_name) AS "ALICI", 
	   author.email AS "ALICI MAIL" FROM book 
JOIN author ON author.id = book.author_id

ALTER TABLE author
ADD UNIQUE(email)

select *from author

INSERT INTO author (first_name,last_name,email,birthday)
			VALUES ('Enes','Çakır','jhuckerby0@google.de','2007-10-15')
--ERROR:  duplicate key value violates unique constraint "author_email_key"

ALTER TABLE author
ADD CHECK(birthday>'1970-01-01')
--Tarih kısıtlaması 

DELETE FROM book
WHERE author_id IN (SELECT id FROM author WHERE birthday<'1970-01-01')
--Author tablosında kısıtlamaya uymayan verileri silmek için önce book tablosundaki ilişkili veriler silinmesi

DELETE FROM author
WHERE birthday<'1970-01-01'
--İlişkili veriler siliniyor

INSERT INTO author (first_name,last_name,email,birthday)
			VALUES ('Enes','Çakır','jhuckerby0@google.de','1969-10-15')
--ERROR:  new row for relation "author" violates check constraint "author_birthday_check"
