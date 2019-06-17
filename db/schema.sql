DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE `burgers` (
  `burger_id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(50) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  PRIMARY KEY (`burger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;