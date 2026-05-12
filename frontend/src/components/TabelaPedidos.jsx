import '../styles/table.css';

export function TabelaPedidos({ pedidos, onEditar, onDeletar, carregando }) {
  if (carregando) {
    return <div className="carregando">Carregando pedidos...</div>;
  }

  if (!pedidos || !Array.isArray(pedidos) || pedidos.length === 0) {
    return <div className="vazio">Nenhum pedido encontrado</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pendente':
        return '#ff6b6b';
      case 'preparando':
        return '#ffd93d';
      case 'entregue':
        return '#6bcf7f';
      default:
        return '#999';
    }
  };

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Cliente</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido) => (
          <tr key={pedido.id}>
            <td>{pedido.id}</td>
            <td>{pedido.produto}</td>
              <td>R$ {pedido.valor}</td>
            <td>
              <span
                className="status-badge"
                style={{ backgroundColor: getStatusColor(pedido.status) }}
              >
                {pedido.status}
              </span>
            </td>
            <td>{pedido.cliente_nome || 'Cliente não encontrado'}</td>
            <td className="acoes">
              <button className="btn-editar" onClick={() => onEditar(pedido)}>
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
