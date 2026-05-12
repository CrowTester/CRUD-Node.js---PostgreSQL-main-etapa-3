# 🎯 Início Rápido - Cafeteria Manager

## ⚡ 3 Passos para Rodar a Aplicação

### 1️⃣ Terminal 1 - BACKEND

```powershell
cd "CRUD-Node.js---PostgreSQL-main"
npm install  # (se já não fez)
npm start
```

**Esperado:**
```
Servidor rodando na porta 3001
```

### 2️⃣ Terminal 2 - FRONTEND

```powershell
cd "frontend"
npm install  # (se já não fez)
npm run dev
```

**Esperado:**
```
Local:   http://localhost:5173
```

### 3️⃣ Abra no Navegador

```
http://localhost:5173
```

---

## 📋 O que foi Implementado

### ✅ Backend (Node.js + Express + PostgreSQL)

- **CORS configurado** ✓ para aceitar requisições do frontend
- **4 endpoints de Clientes:**
  - `GET /clientes` - Listar todos
  - `POST /clientes` - Criar novo
  - `PUT /clientes/:id` - Editar
  - `DELETE /clientes/:id` - Deletar

- **4 endpoints de Pedidos:**
  - `GET /pedidos?status=pendente` - Listar com filtro
  - `GET /pedidos/:id` - Obter detalhes
  - `POST /pedidos` - Criar novo
  - `PUT /pedidos/:id` - Editar status

### ✅ Frontend (React + Vite)

#### 🗂️ Estrutura Criada:
```
frontend/src/
├── components/
│   ├── TabelaClientes.jsx
│   ├── TabelaPedidos.jsx
│   ├── FormularioClientes.jsx
│   ├── FormularioPedidos.jsx
│   ├── Modal.jsx
│   └── Notification.jsx
├── pages/
│   ├── PaginaClientes.jsx
│   └── PaginaPedidos.jsx
├── services/
│   └── apiService.js
├── routes/
│   └── AppRoutes.jsx
├── styles/
│   ├── global.css
│   ├── table.css
│   ├── formulario.css
│   ├── modal.css
│   ├── notification.css
│   ├── filtro.css
│   ├── page.css
│   └── navegacao.css
├── App.jsx
└── main.jsx
```

#### 📱 Páginas Implementadas:

1. **Tela de Clientes** (`/`)
   - Tabela com lista de clientes
   - Botão "Novo Cliente"
   - Formulário de cadastro/edição com validação
   - Botões Editar e Deletar
   - Modal de confirmação de deletação
   - Validação de email

2. **Tela de Pedidos** (`/pedidos`)
   - Tabela com lista de pedidos
   - Filtro por status (Todos, Pendente, Preparando, Entregue)
   - Botão "Novo Pedido"
   - Formulário com seleção de cliente
   - Campos: Produto, Valor, Status
   - Edição de status

#### 🎨 Componentes Criados:

- **TabelaClientes**: Exibe lista de clientes com ações
- **TabelaPedidos**: Exibe lista de pedidos com badges de status colorido
- **FormularioClientes**: Validação de nome e email
- **FormularioPedidos**: Validação de produto, valor e cliente
- **Modal**: Confirmação antes de deletar
- **Notification**: Mensagens de sucesso/erro/aviso

#### ✨ Funcionalidades:

✅ Criar, ler, atualizar e deletar clientes  
✅ Criar, ler, atualizar e deletar pedidos  
✅ Filtrar pedidos por status  
✅ Validação completa de formulários  
✅ Notificações amigáveis  
✅ Carregamento visual  
✅ Design responsivo  
✅ Integração HTTP com Axios  

### 🎨 Design

- **Cores**: Gradiente roxo (667eea → 764ba2)
- **Status Colors**:
  - 🔴 Pendente: Vermelho (#ff6b6b)
  - 🟡 Preparando: Amarelo (#ffd93d)
  - 🟢 Entregue: Verde (#6bcf7f)

### 🔧 Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React, Vite, Axios, React Router |
| Backend | Node.js, Express, CORS |
| Banco de Dados | PostgreSQL |
| HTTP | Axios (cliente) |

---

## 📝 Validações Implementadas

### ❌ Clientes
- Nome obrigatório
- Email válido (regex)
- Email único (BD)

### ❌ Pedidos
- Cliente obrigatório
- Produto obrigatório
- Valor > 0
- Status válido

---

## 🚀 Próximos Passos (Opcional)

- [ ] Adicionar paginação
- [ ] Busca por nome de cliente
- [ ] Gráficos de pedidos por status
- [ ] Autenticação de usuários
- [ ] Download de relatórios
- [ ] Deploy em produção

---

## ❓ Dúvidas?

**Certifique-se:**
1. ✓ PostgreSQL está rodando
2. ✓ Banco "dice storage" existe
3. ✓ Porta 3001 (backend) está livre
4. ✓ Porta 5173 (frontend) está livre

Tudo pronto? Divirta-se! 🎉
