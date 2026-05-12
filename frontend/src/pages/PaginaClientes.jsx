import { useState, useEffect } from 'react';
import { clientesService } from '../services/apiService';
import { TabelaClientes } from '../components/TabelaClientes';
import { FormularioClientes } from '../components/FormularioClientes';
import { Modal } from '../components/Modal';
import { useNotification } from '../components/Notification';
import '../styles/page.css';

export function PaginaClientes() {
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mostraFormulario, setMostraFormulario] = useState(false);
  const [clienteEditando, setClienteEditando] = useState(null);
  const [modalDeletar, setModalDeletar] = useState(null);
  const { showNotification, Notification } = useNotification();

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      setCarregando(true);
      const response = await clientesService.listar();
      setClientes(response.data);
    } catch (erro) {
      showNotification('Erro ao carregar clientes', 'erro');
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  const handleNovoCliente = () => {
    setClienteEditando(null);
    setMostraFormulario(true);
  };

  const handleEditar = (cliente) => {
    setClienteEditando(cliente);
    setMostraFormulario(true);
  };

  const handleDeletar = (id) => {
    setModalDeletar(id);
  };

  const confirmarDeletar = async () => {
    try {
      setCarregando(true);
      await clientesService.deletar(modalDeletar);
      showNotification('Cliente deletado com sucesso', 'sucesso');
      setModalDeletar(null);
      carregarClientes();
    } catch (erro) {
      showNotification(erro.response?.data?.erro || 'Erro ao deletar cliente', 'erro');
    } finally {
      setCarregando(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      setCarregando(true);
      if (clienteEditando) {
        await clientesService.atualizar(clienteEditando.id, formData);
        showNotification('Cliente atualizado com sucesso', 'sucesso');
      } else {
        await clientesService.criar(formData);
        showNotification('Cliente criado com sucesso', 'sucesso');
      }
      setMostraFormulario(false);
      carregarClientes();
    } catch (erro) {
      showNotification(erro.response?.data?.erro || 'Erro ao salvar cliente', 'erro');
    } finally {
      setCarregando(false);
    }
  };

  const handleCancelar = () => {
    setMostraFormulario(false);
    setClienteEditando(null);
  };

  return (
    <div className="pagina">
      <Notification />
      <div className="header">
        <h1>Clientes</h1>
        {!mostraFormulario && (
          <button className="btn-novo" onClick={handleNovoCliente}>
            + Novo Cliente
          </button>
        )}
      </div>

      {mostraFormulario ? (
        <div className="formulario-container">
          <h2>{clienteEditando ? 'Editar Cliente' : 'Novo Cliente'}</h2>
          <FormularioClientes
            cliente={clienteEditando}
            onSubmit={handleSubmit}
            onCancel={handleCancelar}
            carregando={carregando}
          />
        </div>
      ) : (
        <div className="tabela-container">
          <TabelaClientes
            clientes={clientes}
            onEditar={handleEditar}
            onDeletar={handleDeletar}
            carregando={carregando}
          />
        </div>
      )}

      {modalDeletar && (
        <Modal
          titulo="Deletar Cliente"
          mensagem="Tem certeza que deseja deletar este cliente? Esta ação não pode ser desfeita."
          onConfirmar={confirmarDeletar}
          onCancelar={() => setModalDeletar(null)}
        />
      )}
    </div>
  );
}
