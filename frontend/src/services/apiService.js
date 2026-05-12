import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Clientes
export const clientesService = {
  listar: () => api.get('/clientes'),
  obter: (id) => api.get(`/clientes/${id}`),
  criar: (dados) => api.post('/clientes', dados),
  atualizar: (id, dados) => api.put(`/clientes/${id}`, dados),
  deletar: (id) => api.delete(`/clientes/${id}`),
  listarPedidos: (id) => api.get(`/clientes/${id}/pedidos`),
};

// Pedidos
export const pedidosService = {
  listar: (status) => {
    if (status) {
      return api.get(`/pedidos?status=${status}`);
    }
    return api.get('/pedidos');
  },
  obter: (id) => api.get(`/pedidos/${id}`),
  criar: (dados) => api.post('/pedidos', dados),
  atualizar: (id, dados) => api.put(`/pedidos/${id}`, dados),
};

export default api;
