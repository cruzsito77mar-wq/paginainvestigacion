import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  Repeat,
  HelpCircle,
  FlaskRound,
  ShieldCheck,
} from "lucide-react";

import "../styles/Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="navbar-pro-dark-blue">
      <div className="nav-container">

        <Link to="/" className="logo-full">
          <div className="logo-wrapper">
            <img src={Logo} alt="Alpha & Omega Logo" className="logo-img" />
          </div>

          <div className="brand-text">
            <h1>Alpha Omega</h1>
            <p>Excelencia e Innovación en Ciencias de la Salud</p>
          </div>
        </Link>

        <nav className="nav-items">
          <Link to="/" className="nav-icon-item">
            <Home className="nav-icon" />
            <span className="nav-text">Inicio</span>
          </Link>

          <Link to="/quienes-somos" className="nav-icon-item">
            <Users className="nav-icon" />
            <span className="nav-text">Quiénes Somos</span>
          </Link>

          <Link to="/servicios" className="nav-icon-item">
            <Briefcase className="nav-icon" />
            <span className="nav-text">Servicios</span>
          </Link>

          <Link to="/proceso" className="nav-icon-item">
            <Repeat className="nav-icon" />
            <span className="nav-text">Proceso</span>
          </Link>

          <Link to="/faq" className="nav-icon-item">
            <HelpCircle className="nav-icon" />
            <span className="nav-text">FAQ</span>
          </Link>

          {/* 🔥 RESALTADO */}
          <Link to="/analisis" className="nav-icon-item nav-highlight">
            <FlaskRound className="nav-icon" />
            <span className="nav-text">Análisis</span>
          </Link>

          {/* 🔥 RESALTADO */}
          <Link to="/antiplagio" className="nav-icon-item nav-highlight">
            <ShieldCheck className="nav-icon" />
            <span className="nav-text">Antiplagio</span>
          </Link>
        </nav>

      </div>
    </header>
  );
}

