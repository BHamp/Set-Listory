DROP DATABASE IF EXISTS listory;

CREATE DATABASE listory;

\c listory;

CREATE TABLE users (
  userid int PRIMARY KEY,
  username text,
  password text,
  email text
);

CREATE TABLE shows (
  showid text PRIMARY KEY,
  artist text,
  eventDate text,
  city text,
  state text,
  venue text,
  sets text,
  userid int
);

