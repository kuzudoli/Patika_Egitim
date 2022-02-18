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

ALTER TABLE book
ALTER COLUMN page_number SET NOT NULL






