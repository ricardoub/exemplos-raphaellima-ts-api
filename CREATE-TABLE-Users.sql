-- Table: "Users"

-- DROP TABLE "Users";

CREATE TABLE "Users"
(
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  email character varying(255) NOT NULL,
  password character varying(255) NOT NULL,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "Users_pkey" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Users"
  OWNER TO postgres;

-- Sequence: "Users_id_seq"

-- DROP SEQUENCE "Users_id_seq";

CREATE SEQUENCE "Users_id_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 0
  CACHE 1;
ALTER TABLE "Users_id_seq"
  OWNER TO postgres;
