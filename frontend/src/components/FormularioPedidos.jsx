import { useState, useEffect } from 'react';
import '../styles/formulario.css';

export function FormularioPedidos({ pedido, clientes, onSubmit, onCancel, carregando }) {
  const [formData, setFormData] = useState({
    produto: '',
    valor: '',
    status: 'pendente',
    cliente_id: '',
  });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (pedido) {
      setFormData({
        produto: pedido.produto,
        valor: pedido.valor,
        status: pedido.status,
        cliente_id: pedido.cliente_id,
      });
    }
  }, [pedido]);

  const validar = () => {
    const novasErros = {};

    if (!formData.produto.trim()) {
      novasErros.produto = 'Produto é obrigatório';
    }

    if (!formData.valor || isNaN(formData.valor) || parseFloat(formData.valor) <= 0) {
      novasErros.valor = 'Valor deve ser um número maior que 0';
    }

    if (!formData.cliente_id) {
      novasErros.cliente_id = 'Cliente é obrigatório';
    }

    if (!formData.status) {
      novasErros.status = 'Status é obrigatório';
    }

    setErros(novasErros);
    return Object.keys(novasErros).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (erros[name]) {
      setErros((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit({
        ...formData,
        valor: parseFloat(formData.valor),
        cliente_id: parseInt(formData.cliente_id),
      });
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cliente_id">Cliente *</label>
        <select
          id="cliente_id"
          name="cliente_id"
          value={formData.cliente_id}
          onChange={handleChange}
          disabled={carregando}
        >
          <option value="">Selecione um cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome}
            </option>
          ))}
        </select>
        {erros.cliente_id && <span className="erro">{erros.cliente_id}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="produto">Produto *</label>
        <input
          type="text"
          id="produto"
          name="produto"
          value={formData.produto}
          onChange={handleChange}
          placeholder="Digite o nome do produto"
          disabled={carregando}
        />
        {erros.produto && <span className="erro">{erros.produto}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="valor">Valor (R$) *</label>
        <input
          type="number"
          id="valor"
          name="valor"
          value={formData.valor}
          onChange={handleChange}
          placeholder="0.00"
          step="0.01"
          min="0"
          disabled={carregando}
        />
        {erros.valor && <span className="erro">{erros.valor}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="status">Status *</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          disabled={carregando}
        >
          <option value="pendente">Pendente</option>
          <option value="preparando">Preparando</option>
          <option value="entregue">Entregue</option>
        </select>
        {erros.status && <span className="erro">{erros.status}</span>}
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-salvar" disabled={carregando}>
          {carregando ? 'Salvando...' : 'Salvar'}
        </button>
        <button type="button" className="btn-cancelar" onClick={onCancel} disabled={carregando}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
