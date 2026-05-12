import { useState, useEffect } from 'react';
import '../styles/formulario.css';

export function FormularioClientes({ cliente, onSubmit, onCancel, carregando }) {
  const [formData, setFormData] = useState({ nome: '', email: '' });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (cliente) {
      setFormData(cliente);
    }
  }, [cliente]);

  const validar = () => {
    const novasErros = {};

    if (!formData.nome.trim()) {
      novasErros.nome = 'Nome é obrigatório';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      novasErros.email = 'Email inválido';
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
      onSubmit(formData);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome *</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite o nome"
          disabled={carregando}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite o email"
          disabled={carregando}
        />
        {erros.email && <span className="erro">{erros.email}</span>}
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
