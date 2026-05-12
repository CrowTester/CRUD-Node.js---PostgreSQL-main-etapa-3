
-- CREATE TABLE IF NOT EXISTS clientes (
--   id SERIAL PRIMARY KEY,
--   nome VARCHAR(255) NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS pedidos (
--   id SERIAL PRIMARY KEY,
--   produto VARCHAR(255) NOT NULL,
--   valor NUMERIC(10,2) NOT NULL,
--   status VARCHAR(50) DEFAULT 'pendente',
--   cliente_id INTEGER REFERENCES clientes(id) on delete cascade 
-- );

-- ALTER TABLE pedidos
-- DROP CONSTRAINT pedidos_cliente_id_fkey;

-- ALTER TABLE pedidos
-- ADD CONSTRAINT pedidos_cliente_id_fkey
-- FOREIGN KEY (cliente_id)
-- REFERENCES clientes(id)
-- ON DELETE CASCADE;

