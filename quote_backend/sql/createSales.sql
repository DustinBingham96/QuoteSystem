	
CREATE TABLE quote (
  qID int(11) NOT NULL AUTO_INCREMENT,
  cID int(11) DEFAULT NULL,
  aID int(11) DEFAULT NULL,
  quote mediumtext DEFAULT NULL,
  secret tinytext DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  finalized tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (qID),
  FOREIGN KEY (aID) REFERENCES sales (ID)
);