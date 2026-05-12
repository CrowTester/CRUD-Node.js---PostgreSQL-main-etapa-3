# 🎯 Cafeteria Manager - CRUD Full Stack

Um sistema completo Full Stack para gerenciar clientes e pedidos de uma cafeteria, utilizando React no frontend e Node.js + PostgreSQL no backend.

## 📋 Funcionalidades

### Tela de Clientes
- ✅ Listagem de clientes
- ✅ Cadastro de novos clientes
- ✅ Edição de clientes
- ✅ Remoção de clientes
- ✅ Validação de email

### Tela de Pedidos
- ✅ Listagem de pedidos
- ✅ Cadastro de novos pedidos
- ✅ Edição de pedidos
- ✅ Atualização de status
- ✅ Filtro por status (Pendente, Preparando, Entregue)
- ✅ Associação com clientes

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React, Vite, Axios, React Router DOM
- **Backend**: Node.js, Express, PostgreSQL
- **Estilos**: CSS Modular

## 📦 Instalação e Setup

### Backend

1. Navegue até a pasta do backend:
```bash
cd CRUD-Node.js---PostgreSQL-main
```

2. Instale as dependências:
```bash
npm install
```

3. Certifique-se de que o PostgreSQL está rodando e o banco de dados "dice storage" existe

4. Inicie o servidor:
```bash
npm start
# ou
node server.js
```

O backend estará disponível em `http://localhost:3001`

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## 🗂️ Estrutura do Projeto

```
CRUD-Node.js---PostgreSQL-main/
├── CRUD-Node.js---PostgreSQL-main/     # Backend
│   ├── server.js                        # Configuração Express
│   ├── db.js                            # Conexão PostgreSQL
│   └── package.json
│
└── frontend/                            # Frontend React
    ├── src/
    │   ├── components/                  # Componentes reutilizáveis
    │   │   ├── TabelaClientes.jsx
    │   │   ├── TabelaPedidos.jsx
    │   │   ├── FormularioClientes.jsx
    │   │   ├── FormularioPedidos.jsx
    │   │   ├── Modal.jsx
    │   │   └── Notification.jsx
    │   │
    │   ├── pages/                       # Páginas/Telas
    │   │   ├── PaginaClientes.jsx
    │   │   └── PaginaPedidos.jsx
    │   │
    │   ├── services/                    # Integração com API
    │   │   └── apiService.js
    │   │
    │   ├── routes/                      # Configuração de rotas
    │   │   └── AppRoutes.jsx
    │   │
    │   ├── styles/                      # Estilos CSS
    │   │   ├── global.css
    │   │   ├── table.css
    │   │   ├── formulario.css
    │   │   ├── modal.css
    │   │   ├── notification.css
    │   │   ├── filtro.css
    │   │   ├── page.css
    │   │   └── navegacao.css
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Como Usar

1. **Certifique-se de que Backend e Frontend estão rodando**
   - Backend na porta 3001
   - Frontend na porta 5173

2. **Acesse a aplicação**
   - Abra `http://localhost:5173` no navegador

3. **Comece a usar**
   - Vá para "Clientes" e cadastre os primeiros clientes
   - Depois vá para "Pedidos" e crie pedidos associados aos clientes
   - Atualize status dos pedidos conforme necessário

## 📝 Validações Implementadas

### Clientes
- ❌ Nome não pode estar vazio
- ❌ Email deve ser válido
- ❌ Email não pode estar duplicado no banco

### Pedidos
- ❌ Não pode haver pedidos sem cliente
- ❌ Produto não pode estar vazio
- ❌ Valor deve ser um número maior que 0
- ❌ Status deve ser válido (pendente, preparando, entregue)

## 🎨 Design e UX

- Interface moderna com gradiente roxo
- Notificações amigáveis de sucesso, erro e aviso
- Modal de confirmação para deletar clientes
- Carregamento visual durante operações
- Design responsivo para mobile
- Animações suaves e transições

## 📊 API Endpoints

### Clientes
- `GET /clientes` - Listar todos os clientes
- `POST /clientes` - Criar novo cliente
- `PUT /clientes/:id` - Atualizar cliente
- `DELETE /clientes/:id` - Deletar cliente

### Pedidos
- `GET /pedidos` - Listar pedidos (com filtro opcional de status)
- `GET /pedidos/:id` - Obter detalhes do pedido
- `POST /pedidos` - Criar novo pedido
- `PUT /pedidos/:id` - Atualizar pedido

## ⚙️ Configuração do Banco de Dados

O projeto usa um banco de dados PostgreSQL chamado "dice storage" com as seguintes tabelas:

```sql
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  produto VARCHAR(100) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pendente',
  cliente_id INTEGER REFERENCES clientes(id)
);
```

## 🐛 Troubleshooting

### Frontend não conecta ao backend
- Certifique-se de que o backend está rodando na porta 3001
- Verifique se CORS está ativado no backend

### Erro de banco de dados
- Verifique se PostgreSQL está rodando
- Confirme se o banco "dice storage" existe
- Valide as credenciais em `db.js`

## 📝 Notas Importantes

- A aplicação utiliza React Hooks (useState, useEffect)
- CORS está ativado para permitir requisições do frontend
- Validações ocorrem tanto no frontend quanto no backend
- Notificações aparecem automaticamente após ações

## 👨‍💻 Desenvolvido como projeto Full Stack

Este projeto demonstra um fluxo profissional de desenvolvimento Full Stack, integrando:
- Frontend moderno com React
- Backend robusto com Express
- Banco de dados PostgreSQL
- Componentes reutilizáveis
- Gerenciamento de estado
- Integração HTTP via Axios
- Sistema de rotas
- Design responsivo
