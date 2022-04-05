--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.cards (
    question text,
    answer text,
    remembertime timestamp without time zone,
    createtime timestamp without time zone,
    rememberlevel integer,
    score integer,
    id integer NOT NULL
);


ALTER TABLE public.cards OWNER TO me;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cards_id_seq OWNER TO me;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.cards (question, answer, remembertime, createtime, rememberlevel, score, id) FROM stdin;
How to commit in Git?	git commit -m “<commit message>”.	\N	2022-04-11 08:40:33.51	0	0	54
How to create a new branch and switch to it in Git?	git checkout -b <branchname>	\N	2022-04-11 08:40:47.511	0	0	55
How to force push your changes?	git push origin <branch name>  -f	\N	2022-04-11 08:41:06.526	0	0	56
How to squash commits in Git?	git rebase -i HEAD~<number of commits>	\N	2022-04-11 08:41:24.51	0	0	57
\.


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.cards_id_seq', 59, true);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

