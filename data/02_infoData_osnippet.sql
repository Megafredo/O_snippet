BEGIN;

INSERT INTO "role" ("id", "name") VALUES
(1,'admin'),
(2,'user');

INSERT INTO "user" ("id","username","email","password", "role_id") VALUES 
    (1, 'admin', 'admin@admin.com','$2y$10$2xIg5iimtxcmZsZ0SztyGe2k4iYFJcG1j6d.6T6JrbmOPFS7LOyIa', 1);

--
-- Postgres avec le fait d'ajouter IDENTITY BY DEFAULT au lieu de ALWAYS ne met pas à jour le curseur de l'incrément de la séquence de façon implicite !
-- Il faut donc mettre à jour la valeur courante de chacune des séquences en séléctionnant l'id maximum de chaque table
--

SELECT setval('category_id_seq', (SELECT MAX(id) from "category"));
SELECT setval('role_id_seq', (SELECT MAX(id) from "role"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));
SELECT setval('snippet_id_seq', (SELECT MAX(id) from "snippet"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));


COMMIT;