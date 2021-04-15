CREATE TABLE IF NOT EXISTS sales (
  ID int(11) NOT NULL AUTO_INCREMENT,
  userID varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  commission double NOT NULL DEFAULT 0,
  address varchar(50) NOT NULL,
  PRIMARY KEY (ID));