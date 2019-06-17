DROP USER IF EXISTS 'buger_user'@'localhost';

CREATE USER 'burger_user'@'localhost' identified with mysql_native_password by 'burger'; --mysql
CREATE USER 'burger_user'@'localhost' IDENTIFIED BY 'burger'; --mariadb
GRANT ALL ON burder_db.* TO 'burger_user'@'localhost';