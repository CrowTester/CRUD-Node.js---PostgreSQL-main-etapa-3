import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PaginaClientes } from '../pages/PaginaClientes';
import { PaginaPedidos } from '../pages/PaginaPedidos';
import '../styles/navegacao.css';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            ☕ Cafeteria Manager
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pedidos" className="nav-link">
                Pedidos
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<PaginaClientes />} />
          <Route path="/pedidos" element={<PaginaPedidos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
