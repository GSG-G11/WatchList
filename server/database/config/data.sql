BEGIN;
DROP TABLE IF EXISTS users,list CASCADE;
CREATE TABLE users (
  id  serial  PRIMARY KEY,
  userName  varchar(100)  NOT NULL,
  email  varchar(100) UNIQUE  NOT NULL,
  password  varchar(100)  NOT NULL
);
CREATE TABLE list (
  id  serial  PRIMARY KEY,
  name  varchar(100)  NOT NULL,
  episodes integer,
  type  varchar(100) ,
  user_id integer   REFERENCES users(id) ON UPDATE CASCADE
);


COMMIT;