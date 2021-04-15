CREATE TABLE IF NOT EXISTS newquote (
  qID int(11) NOT NULL AUTO_INCREMENT,
  cID int(11) DEFAULT NULL,
  aID int(11) DEFAULT NULL,
  quote mediumtext DEFAULT NULL,
  secret tinytext DEFAULT NULL,
  email varchar(20) DEFAULT NULL,
  PRIMARY KEY (qID),
  FOREIGN KEY (aID) REFERENCES sales (ID)
);