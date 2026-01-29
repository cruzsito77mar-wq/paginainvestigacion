import { useState } from "react";
import "../styles/Analisis.css";
import {
  Database,
  Filter,
  BarChart3,
  Activity,
  PieChart,
  FileText,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Users,
  BookOpen,
  Clock,
  Shield,
  BarChart
} from "lucide-react";

const items = [
  { icon: <Database size={48} />, text: "Revisión y depuración profesional de bases de datos." },
  { icon: <Filter size={48} />, text: "Limpieza avanzada y codificación correcta de variables." },
  { icon: <Activity size={48} />, text: "Identificación y tratamiento de valores atípicos." },
  { icon: <BarChart3 size={48} />, text: "Selección óptima de pruebas estadísticas." },
  { icon: <PieChart size={48} />, text: "Análisis con software especializado (SPSS, R, Python)." },
  { icon: <CheckCircle size={48} />, text: "Interpretación clara, precisa y sin tecnicismos." },
  { icon: <FileText size={48} />, text: "Gráficas y tablas listas para artículos o tesis con informe final." }
];

const tarjetas = [
  {
    title: "Ideal para",
    icon: <GraduationCap size={20} />,
    content: [
      { icon: <GraduationCap size={18} />, text: "Estudiantes de licenciatura y posgrado" },
      { icon: <Stethoscope size={18} />, text: "Médicos residentes" },
      { icon: <Activity size={18} />, text: "Investigadores clínicos" },
      { icon: <Users size={18} />, text: "Profesionales de la salud" },
      { icon: <BookOpen size={18} />, text: "Tesistas sin experiencia en estadística" }
    ]
  },
  {
    title: "Tiempos de entrega",
    icon: <Clock size={20} />,
    content: [
      { icon: <Clock size={18} />, text: "Según el proyecto: 2 a 5 días." },
      { icon: <Clock size={18} />, text: "Opciones urgentes disponibles." }
    ]
  },
  {
    title: "Confidencialidad",
    icon: <Shield size={20} />,
    content: [
      { icon: <Shield size={18} />, text: "Tus datos se manejan bajo estrictos protocolos de privacidad y estándares profesionales." }
    ]
  },
  {
    title: "Tipos de análisis",
    icon: <BarChart size={20} />,
    content: [
      { icon: <BarChart size={18} />, text: "Estadística descriptiva" },
      { icon: <BarChart3 size={18} />, text: "Pruebas de hipótesis" },
      { icon: <Activity size={18} />, text: "Regresiones y correlaciones" },
      { icon: <PieChart size={18} />, text: "Análisis avanzados" }
    ]
  }
];

export default function Analisis() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(Array(tarjetas.length).fill(false));

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const totalWidth = e.target.scrollWidth - e.target.clientWidth;
    const newIndex = scrollLeft < totalWidth / 2 ? 0 : 1;
    setIndex(newIndex);
  };

  const handleDotClick = (dotIndex) => {
    const wrapper = document.querySelector(".carousel-scroll-wrapper");
    const totalWidth = wrapper.scrollWidth - wrapper.clientWidth;
    const left = dotIndex === 0 ? 0 : totalWidth;
    wrapper.scrollTo({ left, behavior: "smooth" });
  };

  const toggleExpand = (i) => {
    const newExpanded = [...expanded];
    newExpanded[i] = !newExpanded[i];
    setExpanded(newExpanded);
  };

  return (
    <div className="analisis-container">

      {/* ENCABEZADO PRINCIPAL */}
      <div className="analisis-header">
        <h1 className="analisis-title">Análisis de Datos y Bioestadística</h1>
        <p className="analisis-subtitle">
          Transformamos tus datos en resultados claros, confiables y listos para publicación científica.
        </p>
      </div>

      {/* CARRUSEL */}
      <div className="carousel-box">
        <h2 className="carousel-title">¿Qué incluye este servicio?</h2>
        <div className="carousel-scroll-wrapper" onScroll={handleScroll}>
          <div className="carousel-scroll-track">
            {items.map((item, i) => (
              <div className="carousel-card" key={i}>
                <div className="carousel-icon">{item.icon}</div>
                <p className="carousel-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {[0, 1].map((dotIndex) => (
            <span
              key={dotIndex}
              className={`dot ${dotIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(dotIndex)}
            />
          ))}
        </div>
      </div>

      {/* TARJETAS DOBLE FILA */}
      <div className="ideal-section-double">
        {tarjetas.map((tarjeta, i) => (
          <div key={i} className="ideal-col">
            <div className="ideal-card-modern" onClick={() => toggleExpand(i)}>
              <div className="ideal-card-header">
                {tarjeta.icon} <h2>{tarjeta.title}</h2>
              </div>
              <div className={`ideal-card-content ${expanded[i] ? "expanded" : ""}`}>
                {tarjeta.content.map((item, j) => (
                  <div key={j} className="ideal-item">
                    {item.icon} <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
