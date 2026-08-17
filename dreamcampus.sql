--
-- PostgreSQL database dump
--

\restrict eXlpEI1SmWe35naztyBPpr2Lu01WYs4bGzcv67Ze8EFq7E9ZYEo6UXbKYxLSMWN

-- Dumped from database version 18.4 (Ubuntu 18.4-0ubuntu0.26.04.1)
-- Dumped by pg_dump version 18.4 (Ubuntu 18.4-0ubuntu0.26.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: previous_year_questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.previous_year_questions (
    id integer NOT NULL,
    exam character varying(50) NOT NULL,
    year integer NOT NULL,
    subject character varying(50) NOT NULL,
    title character varying(200) NOT NULL,
    pdf_url text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: previous_year_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.previous_year_questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: previous_year_questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.previous_year_questions_id_seq OWNED BY public.previous_year_questions.id;


--
-- Name: study_materials; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.study_materials (
    id integer NOT NULL,
    subject character varying(50) NOT NULL,
    notes text,
    formulas text,
    pyq text,
    practice_questions text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: study_materials_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.study_materials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: study_materials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.study_materials_id_seq OWNED BY public.study_materials.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_id character varying(50) NOT NULL,
    password_hash text NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    exam character varying(30) NOT NULL,
    mobile character varying(15) NOT NULL,
    mobile_verified boolean DEFAULT false,
    firebase_uid character varying(150),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: previous_year_questions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.previous_year_questions ALTER COLUMN id SET DEFAULT nextval('public.previous_year_questions_id_seq'::regclass);


--
-- Name: study_materials id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.study_materials ALTER COLUMN id SET DEFAULT nextval('public.study_materials_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: previous_year_questions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.previous_year_questions (id, exam, year, subject, title, pdf_url, created_at, updated_at) FROM stdin;
1	WBJEE	2025	Physics	WBJEE 2025 Physics	/previous-year-questions/wbjee/2025/physics.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
2	WBJEE	2025	Chemistry	WBJEE 2025 Chemistry	/previous-year-questions/wbjee/2025/chemistry.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
3	WBJEE	2025	Mathematics	WBJEE 2025 Mathematics	/previous-year-questions/wbjee/2025/mathematics.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
4	JEE Main	2025	Physics	JEE Main 2025 Physics	/previous-year-questions/jee-main/2025/physics.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
5	JEE Main	2025	Chemistry	JEE Main 2025 Chemistry	/previous-year-questions/jee-main/2025/chemistry.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
6	JEE Main	2025	Mathematics	JEE Main 2025 Mathematics	/previous-year-questions/jee-main/2025/mathematics.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
7	NEET	2025	Physics	NEET 2025 Physics	/previous-year-questions/neet/2025/physics.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
8	NEET	2025	Chemistry	NEET 2025 Chemistry	/previous-year-questions/neet/2025/chemistry.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
9	NEET	2025	Biology	NEET 2025 Biology	/previous-year-questions/neet/2025/biology.pdf	2026-08-14 02:10:22.55297	2026-08-14 02:10:22.55297
10	WBJEE	2026	Physics	WBJEE 2026 Physics	/previous-year-questions/wbjee/2026/physics.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
11	WBJEE	2026	Chemistry	WBJEE 2026 Chemistry	/previous-year-questions/wbjee/2026/chemistry.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
12	WBJEE	2026	Mathematics	WBJEE 2026 Mathematics	/previous-year-questions/wbjee/2026/mathematics.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
13	JEE Main	2026	Physics	JEE Main 2026 Physics	/previous-year-questions/jee-main/2026/physics.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
14	JEE Main	2026	Chemistry	JEE Main 2026 Chemistry	/previous-year-questions/jee-main/2026/chemistry.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
15	JEE Main	2026	Mathematics	JEE Main 2026 Mathematics	/previous-year-questions/jee-main/2026/mathematics.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
16	NEET	2026	Physics	NEET 2026 Physics	/previous-year-questions/neet/2026/physics.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
17	NEET	2026	Chemistry	NEET 2026 Chemistry	/previous-year-questions/neet/2026/chemistry.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
18	NEET	2026	Biology	NEET 2026 Biology	/previous-year-questions/neet/2026/biology.pdf	2026-08-14 13:10:31.409672	2026-08-14 13:10:31.409672
\.


--
-- Data for Name: study_materials; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.study_materials (id, subject, notes, formulas, pyq, practice_questions, created_at, updated_at) FROM stdin;
1	Physics	/study-materials/physics/notes.pdf	/study-materials/physics/formulas.pdf	/study-materials/physics/pyq.pdf	/study-materials/physics/practice-questions.pdf	2026-08-13 21:42:00.070408	2026-08-13 21:42:00.070408
2	Chemistry	/study-materials/chemistry/notes.pdf	/study-materials/chemistry/formulas.pdf	/study-materials/chemistry/pyq.pdf	/study-materials/chemistry/practice-questions.pdf	2026-08-13 21:42:00.070408	2026-08-13 21:42:00.070408
3	Mathematics	/study-materials/mathematics/notes.pdf	/study-materials/mathematics/formulas.pdf	/study-materials/mathematics/pyq.pdf	/study-materials/mathematics/practice-questions.pdf	2026-08-13 21:42:00.070408	2026-08-13 21:42:00.070408
4	Biology	/study-materials/biology/notes.pdf	/study-materials/biology/formulas.pdf	/study-materials/biology/pyq.pdf	/study-materials/biology/practice-questions.pdf	2026-08-13 21:42:00.070408	2026-08-13 21:42:00.070408
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, user_id, password_hash, name, email, exam, mobile, mobile_verified, firebase_uid, created_at, updated_at) FROM stdin;
1	amit@123	$2b$12$lG5Z62gZVleoGCBv5xWPH.IHrNVd2FzBQURWx5UiKEDZuiTjYKjbG	Amit Bera	abera61040@gmail.com	WBJEE	8535985288	t	EI6yq9fuAjVCKnXTS8Ty7Ph1rls2	2026-08-17 19:59:07.664248	2026-08-17 19:59:07.664248
2	chandra@123	$2b$12$pO4XhJYsE4N/YVCZItfFsuDL8R9aj7.UKBjXbOVvstYi7xVPZiQoa	Chandradhar Kumar	imck03@gmail.com	NEET	8535985283	t	z05FVK4nvCRCh4LpqTxADcoAPKM2	2026-08-17 20:17:25.23733	2026-08-17 20:17:25.23733
\.


--
-- Name: previous_year_questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.previous_year_questions_id_seq', 18, true);


--
-- Name: study_materials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.study_materials_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: previous_year_questions previous_year_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.previous_year_questions
    ADD CONSTRAINT previous_year_questions_pkey PRIMARY KEY (id);


--
-- Name: study_materials study_materials_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.study_materials
    ADD CONSTRAINT study_materials_pkey PRIMARY KEY (id);


--
-- Name: study_materials study_materials_subject_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.study_materials
    ADD CONSTRAINT study_materials_subject_key UNIQUE (subject);


--
-- Name: users users_firebase_uid_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_firebase_uid_key UNIQUE (firebase_uid);


--
-- Name: users users_mobile_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_mobile_key UNIQUE (mobile);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_id_key UNIQUE (user_id);


--
-- PostgreSQL database dump complete
--

\unrestrict eXlpEI1SmWe35naztyBPpr2Lu01WYs4bGzcv67Ze8EFq7E9ZYEo6UXbKYxLSMWN

