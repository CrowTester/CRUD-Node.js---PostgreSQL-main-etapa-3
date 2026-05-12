import { useState, useEffect } from 'react';
import { pedidosService, clientesService } from '../services/apiService';
import { TabelaPedidos } from '../components/TabelaPedidos';
import { FormularioPedidos } from '../components/FormularioPedidos';
import { useNotification } from '../components/Notification';
import '../styles/page.css';
import '../styles/filtro.css';

export function PaginaPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [mostraFormulario, setMostraFormulario] = useState(false);
  const [pedidoEditando, setPedidoEditando] = useState(null);
  const [statusFiltro, setStatusFiltro] = useState('');
  const { showNotification, Notification } = useNotification();

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    carregarPedidos();
  }, [statusFiltro]);

  const carregarDados = async () => {
    try {
      setCarregando(true);
      const responseClientes = await clientesService.listar();
      setClientes(responseClientes.data);
      await carregarPedidos();
    } catch (erro) {
      showNotification('Erro ao carregar dados', 'erro');
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  };

  const carregarPedidos = async () => {
    try {
      const response = await pedidosService.listar(statusFiltro);
      setPedidos(response.data);
    } catch (erro) {
      showNotification('Erro ao carregar pedidos', 'erro');
      console.error(erro);
    }
  };

  const handleNovoPedido = () => {
    if (clientes.length === 0) {
      showNotification('Você precisa criar um cliente antes de criar um pedido', 'aviso');
      return;
    }
    setPedidoEditando(null);
    setMostraFormulario(true);
  };

  const handleEditar = (pedido) => {
    if (clientes.length === 0) {
      showNotification('Você precisa ter clientes cadastrados', 'aviso');
      return;
    }
    setPedidoEditando(pedido);
    setMostraFormulario(true);
  };

  const handleSubmit = async (formData) => {
    try {
      setCarregando(true);
      if (pedidoEditando) {
        await pedidosService.atualizar(pedidoEditando.id, formData);
        showNotification('Pedido atualizado com sucesso', 'sucesso');
      } else {
        await pedidosService.criar(formData);
        showNotification('Pedido criado com sucesso', 'sucesso');
      }
      setMostraFormulario(false);
      carregarPedidos();
    } catch (erro) {
      showNotification(erro.response?.data?.erro || 'Erro ao salvar pedido', 'erro');
    } finally {
      setCarregando(false);
    }
  };

  const handleCancelar = () => {
    setMostraFormulario(false);
    setPedidoEditando(null);
  };

  return (
    <div className="pagina">
      <Notification />
      <div className="header">
        <h1>Pedidos</h1>
        {!mostraFormulario && (
          <button className="btn-novo" onClick={handleNovoPedido}>
            + Novo Pedido
          </button>
        )}
      </div>

      {!mostraFormulario && (
        <div className="filtro-container">
          <label htmlFor="filtro-status">Filtrar por Status:</label>
          <select
            id="filtro-status"
            value={statusFiltro}
            onChange={(e) => setStatusFiltro(e.target.value)}
          >
            <option value="">Todos os Status</option>
            <option value="pendente">Pendente</option>
            <option value="preparando">Preparando</option>
            <option value="entregue">Entregue</option>
          </select>
        </div>
      )}

      {mostraFormulario ? (
        <div className="formulario-container">
          <h2>{pedidoEditando ? 'Editar Pedido' : 'Novo Pedido'}</h2>
          <FormularioPedidos
            pedido={pedidoEditando}
            clientes={clientes}
            onSubmit={handleSubmit}
            onCancel={handleCancelar}
            carregando={carregando}
          />
        </div>
      ) : (
        <div className="tabela-container">
          <TabelaPedidos
            pedidos={pedidos}
            onEditar={handleEditar}
            carregando={carregando}
          />
        </div>
      )}
    </div>
  );
}
