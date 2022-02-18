select * from film

--film tablosunda bulunan filmleri rating değerlerine gore gruplayınız.
select rating from film
group by rating

/*film tablosunda bulunan filmleri replacement_cost sütununa gore grupladığımızda film sayısı 50 den fazla olan 
replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.*/
select replacement_cost, count(*) from film
group by replacement_cost
having count(*)>50

--customer tablosunda bulunan store_id değerlerine karşılık gelen musteri sayılarını nelerdir?
select store_id, count(*) from customer
group by store_id

/*city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla 
şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.*/
select country_id, count(*) from city
group by country_id
order by count(*) desc limit 1


