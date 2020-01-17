CREATE DATABASE IF NOT EXISTS soccer;
USE soccer;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);