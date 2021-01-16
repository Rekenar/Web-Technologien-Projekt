-- DROP TABLE public.spending;

CREATE TABLE public.spending
(
    position serial PRIMARY KEY,
    userid smallint,
    name varchar(100) NOT NULL,
    amount decimal NOT NULL,
    type varchar(50) NOT NULL,
    date date NOT NULL
);

INSERT INTO public.spending ("position", userid, name, amount, type, date) VALUES (1, 3, 'sandwich', 4, 'food', '2020-08-20');
INSERT INTO public.spending ("position", userid, name, amount, type, date) VALUES (2, 3, 'burger', 2, 'food', '2020-04-21');
