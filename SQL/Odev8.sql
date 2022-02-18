/*Test veritabanınızda employee isimli sütun bilgileri 
id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.*/
CREATE TABLE employee (
	id INTEGER PRIMARY KEY,
	name VARCHAR(50),
	birthday DATE,
	email VARCHAR(100)
)

SELECT *FROM employee

--Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, birthday, email) values (1, 'Quincy Ashplant', '1994-03-04', 'qashplant0@soup.io');
insert into employee (id, name, birthday, email) values (2, 'Myrta Tuberfield', '1975-04-06', 'mtuberfield1@umich.edu');
insert into employee (id, name, birthday, email) values (3, 'Buddy Pattrick', '1929-05-21', 'bpattrick2@drupal.org');
insert into employee (id, name, birthday, email) values (4, 'Fabian Linke', '1968-07-28', 'flinke3@ted.com');
insert into employee (id, name, birthday, email) values (5, 'Janelle Franzen', '1906-10-10', 'jfranzen4@arizona.edu');
insert into employee (id, name, birthday, email) values (6, 'Deny Mayow', '2004-01-03', 'dmayow5@mashable.com');
insert into employee (id, name, birthday, email) values (7, 'Lazar Gremain', '1918-08-19', 'lgremain6@themeforest.net');
insert into employee (id, name, birthday, email) values (8, 'Adela Edmeades', '1999-03-29', 'aedmeades7@npr.org');
insert into employee (id, name, birthday, email) values (9, 'Garwood Baselio', '1945-10-30', 'gbaselio8@hc360.com');
insert into employee (id, name, birthday, email) values (10, 'Dom Bentjens', '1984-02-21', 'dbentjens9@hibu.com');
insert into employee (id, name, birthday, email) values (11, 'Eadmund Eagger', '2015-11-04', 'eeaggera@constantcontact.com');
insert into employee (id, name, birthday, email) values (12, 'Carlie Bointon', '2006-09-08', 'cbointonb@aol.com');
insert into employee (id, name, birthday, email) values (13, 'Cordell Sangar', '2003-09-01', 'csangarc@webnode.com');
insert into employee (id, name, birthday, email) values (14, 'Farlee Mathes', '1985-08-18', 'fmathesd@census.gov');
insert into employee (id, name, birthday, email) values (15, 'Susi Beeze', '2020-07-24', 'sbeezee@irs.gov');
insert into employee (id, name, birthday, email) values (16, 'Windham Biddles', '1961-09-27', 'wbiddlesf@bigcartel.com');
insert into employee (id, name, birthday, email) values (17, 'Edgard Tommasetti', '1969-01-23', 'etommasettig@discuz.net');
insert into employee (id, name, birthday, email) values (18, 'Crosby Brislen', '1910-01-24', 'cbrislenh@example.com');
insert into employee (id, name, birthday, email) values (19, 'Sisely Tolchar', '1939-09-09', 'stolchari@yahoo.co.jp');
insert into employee (id, name, birthday, email) values (20, 'Vikki Autin', '2004-04-15', 'vautinj@fotki.com');
insert into employee (id, name, birthday, email) values (21, 'Stormi Buxsy', '1986-05-03', 'sbuxsyk@desdev.cn');
insert into employee (id, name, birthday, email) values (22, 'Melony Hartus', '1960-12-29', 'mhartusl@google.co.jp');
insert into employee (id, name, birthday, email) values (23, 'Hedda Skill', '1927-04-06', 'hskillm@google.nl');
insert into employee (id, name, birthday, email) values (24, 'Reamonn Siemens', '1923-07-30', 'rsiemensn@cloudflare.com');
insert into employee (id, name, birthday, email) values (25, 'Royal Linley', '1981-12-02', 'rlinleyo@a8.net');
insert into employee (id, name, birthday, email) values (26, 'Aubrey Milligan', '1966-05-02', 'amilliganp@sourceforge.net');
insert into employee (id, name, birthday, email) values (27, 'Jackson Alywin', '1954-11-18', 'jalywinq@indiatimes.com');
insert into employee (id, name, birthday, email) values (28, 'Tiphani Brownstein', '2015-04-21', 'tbrownsteinr@cpanel.net');
insert into employee (id, name, birthday, email) values (29, 'Diann Algeo', '1993-10-13', 'dalgeos@army.mil');
insert into employee (id, name, birthday, email) values (30, 'Lidia Lechelle', '1962-10-21', 'llechellet@biglobe.ne.jp');
insert into employee (id, name, birthday, email) values (31, 'Cointon Dudny', '1972-07-07', 'cdudnyu@reuters.com');
insert into employee (id, name, birthday, email) values (32, 'Bevvy Burris', '1911-12-24', 'bburrisv@usnews.com');
insert into employee (id, name, birthday, email) values (33, 'Ailey Jedrachowicz', '1901-06-03', 'ajedrachowiczw@lycos.com');
insert into employee (id, name, birthday, email) values (34, 'Jaclin Gregan', '1932-05-03', 'jgreganx@pen.io');
insert into employee (id, name, birthday, email) values (35, 'Eveline Stonuary', '1957-09-25', 'estonuaryy@gnu.org');
insert into employee (id, name, birthday, email) values (36, 'Caryl Marusyak', '1961-07-31', 'cmarusyakz@wikimedia.org');
insert into employee (id, name, birthday, email) values (37, 'Benetta Zoephel', '1943-08-05', 'bzoephel10@timesonline.co.uk');
insert into employee (id, name, birthday, email) values (38, 'Myca Guiett', '1956-04-22', 'mguiett11@naver.com');
insert into employee (id, name, birthday, email) values (39, 'Morten Sarch', '1902-10-29', 'msarch12@shop-pro.jp');
insert into employee (id, name, birthday, email) values (40, 'Orella Adamczewski', '1908-11-06', 'oadamczewski13@networkadvertising.org');
insert into employee (id, name, birthday, email) values (41, 'Callida Balint', '1933-11-26', 'cbalint14@miibeian.gov.cn');
insert into employee (id, name, birthday, email) values (42, 'Tobin Mellem', '1955-11-19', 'tmellem15@pbs.org');
insert into employee (id, name, birthday, email) values (43, 'Jordain Baldree', '2018-02-07', 'jbaldree16@linkedin.com');
insert into employee (id, name, birthday, email) values (44, 'Nancee Dudden', '1994-11-20', 'ndudden17@youtube.com');
insert into employee (id, name, birthday, email) values (45, 'Perry Seamarke', '2016-10-21', 'pseamarke18@hp.com');
insert into employee (id, name, birthday, email) values (46, 'Seamus Elcoat', '1989-02-08', 'selcoat19@guardian.co.uk');
insert into employee (id, name, birthday, email) values (47, 'Mariska Tregent', '1918-10-22', 'mtregent1a@zimbio.com');
insert into employee (id, name, birthday, email) values (48, 'Carce Matus', '1912-01-01', 'cmatus1b@unesco.org');
insert into employee (id, name, birthday, email) values (49, 'Randolf Sanney', '2010-06-13', 'rsanney1c@google.com.au');
insert into employee (id, name, birthday, email) values (50, 'Birk Venneur', '1987-02-26', 'bvenneur1d@bloglines.com');

SELECT *FROM employee

--Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
SELECT *FROM employee order by name desc

UPDATE employee SET name='XX' where name LIKE('B%')
RETURNING *

UPDATE employee SET name='YY' where id='3'
RETURNING *

--Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee WHERE id='3'

DELETE FROM employee WHERE name LIKE('YY%')
