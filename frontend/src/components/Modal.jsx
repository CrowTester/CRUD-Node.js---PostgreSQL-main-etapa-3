import '../styles/modal.css';

export function Modal({ titulo, mensagem, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{titulo}</h2>
        <p>{mensagem}</p>
        <div className="modal-buttons">
          <button className="btn-confirmar" onClick={onConfirmar}>
            Confirmar
          </button>
          <button className="btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
