import '../styles/table.css';

export function TabelaClientes({ clientes, onEditar, onDeletar, carregando }) {
  if (carregando) {
    return <div className="carregando">Carregando clientes...</div>;
  }

  if (clientes.length === 0) {
    return <div className="vazio">Nenhum cliente cadastrado</div>;
  }

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td className="acoes">
              <button className="btn-editar" onClick={() => onEditar(cliente)}>
                Editar
              </button>
              <button className="btn-deletar" onClick={() => onDeletar(cliente.id)}>
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
