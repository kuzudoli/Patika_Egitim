--film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
select title,description,length from film 
where title LIKE '%n'
order by length limit 5

--film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
select title,length from film
where title LIKE '%n'
order by length asc
offset 5
limit 5

--customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.
select store_id,first_name,last_name from customer
where store_id=1
order by last_name desc
limit 4

