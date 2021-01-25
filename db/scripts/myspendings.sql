-- DROP TABLE public.account;
-- DROP TABLE public.spending;

CREATE TABLE public.account
(
    accountid serial PRIMARY KEY,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL
);

SELECT setval('account_accountid_seq', 3, true);

CREATE TABLE public.spending
(
    position serial PRIMARY KEY,
    accountid integer REFERENCES account(accountid),
    name varchar(100) NOT NULL,
    amount decimal NOT NULL,
    type varchar(50) NOT NULL,
    date date NOT NULL
);

SELECT setval('spending_position_seq', 2, true);
