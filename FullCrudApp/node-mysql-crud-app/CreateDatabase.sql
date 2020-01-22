CREATE DATABASE IF NOT EXISTS soccer;
USE soccer;
CREATE TABLE IF NOT EXISTS players (
  id INTEGER AUTO_INCREMENT,
  first_name TEXT,
  last_name TEXT,
  position TEXT,
  number INTEGER,
  PRIMARY KEY (id)
);