import { useState } from "react";
import "../styles/Servicios.css";
import {
  GraduationCap,
  FlaskConical,
  BarChart3,
  BookOpen,
  FileText,
  CheckCircle,
  Database,
  BookMarked,
  ClipboardCheck,
  HeartPulse,
  Beaker
} from "lucide-react";

export default function Servicios() {
  const [openTesis, setOpenTesis] = useState(false);
  const [openInvestigacion, setOpenInvestigacion] = useState(false);
  const [openBioestadistica, setOpenBioestadistica] = useState(false);
  const [openPublicacion, setOpenPublicacion] = useState(false);
  const [openProtocolos, setOpenProtocolos] = useState(false);
  const [openLaboratorios, setOpenLaboratorios] = useState(false);

  return (
    <div className="servicios-layout">

      {/* Encabezado */}
      <section className="servicios-intro">
        <h1>Servicios Profesionales</h1>
        <p>
          Explora cada área y descubre cómo impulsar tu crecimiento científico.
        </p>
      </section>

      <section className="servicios-editorial">

        {/* ===== ASESORÍA EN TESIS ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenTesis(!openTesis)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><GraduationCap /></div>

          <h3>Asesoría en Tesis</h3>
          <p className="servicio-resumen">
            Transforma tu idea en un proyecto publicable.
          </p>

          <div className={`servicio-detalle ${openTesis ? "show" : ""}`}>
            <h4>¿Qué incluye?</h4>
            <ul>
              <li><BookOpen /> Elección y delimitación del tema</li>
              <li><FileText /> Construcción del marco teórico</li>
              <li><CheckCircle /> Diseño metodológico</li>
              <li><BarChart3 /> Análisis e interpretación de resultados</li>
              <li><FileText /> Redacción científica y defensa final</li>
            </ul>
            <p className="servicio-extra">
              Ideal para estudiantes que buscan trabajos de titulación
              de alto impacto y con posibilidad de publicación científica.
            </p>
          </div>
        </article>

        {/* ===== PROYECTOS DE INVESTIGACIÓN ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenInvestigacion(!openInvestigacion)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><FlaskConical /></div>

          <h3>Proyectos de Investigación</h3>
          <p className="servicio-resumen">
            Convierte tu idea en investigación real.
          </p>

          <div className={`servicio-detalle ${openInvestigacion ? "show" : ""}`}>
            <h4>¿Qué lograrás?</h4>
            <ul>
              <li><BookOpen /> Formulación del problema científico</li>
              <li><CheckCircle /> Diseño ético y metodológico sólido</li>
              <li><BarChart3 /> Planeación de ejecución y análisis</li>
              <li><FileText /> Registro institucional del proyecto</li>
            </ul>
            <p className="servicio-extra">
              Proyecto viable, ético y metodológicamente sólido,
              listo para ser presentado ante comités académicos
              o instituciones de salud.
            </p>
          </div>
        </article>

        {/* ===== BIOESTADÍSTICA ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenBioestadistica(!openBioestadistica)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><BarChart3 /></div>

          <h3>Bioestadística y Análisis de Datos</h3>
          <p className="servicio-resumen">
            Domina el análisis científico moderno.
          </p>

          <div className={`servicio-detalle ${openBioestadistica ? "show" : ""}`}>
            <h4>¿Qué aprenderás?</h4>
            <ul>
              <li><CheckCircle /> Selección de pruebas estadísticas</li>
              <li><BarChart3 /> Análisis e interpretación de datos</li>
              <li><FileText /> Tablas, gráficos e informes</li>
              <li><Database /> Revisión de bases de datos</li>
            </ul>
            <p className="servicio-extra">
              Incluye soporte en software estadístico y revisión
              profesional de bases de datos.
            </p>
          </div>
        </article>

        {/* ===== PUBLICACIÓN CIENTÍFICA ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenPublicacion(!openPublicacion)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><BookMarked /></div>

          <h3>Publicación Científica</h3>
          <p className="servicio-resumen">
            Vuelve tu trabajo un artículo publicable.
          </p>

          <div className={`servicio-detalle ${openPublicacion ? "show" : ""}`}>
            <h4>Proceso editorial completo</h4>
            <ul>
              <li><FileText /> Redacción y estructura IMRyD</li>
              <li><CheckCircle /> Análisis crítico del manuscrito</li>
              <li><BookOpen /> Selección de revista</li>
              <li><BookMarked /> Respuesta a revisores</li>
            </ul>
            <p className="servicio-extra">
              Perfecto para fortalecer tu CV, posgrado
              o carrera científica.
            </p>
          </div>
        </article>

        {/* ===== PROTOCOLOS CLÍNICOS ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenProtocolos(!openProtocolos)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><ClipboardCheck /></div>

          <h3>Protocolos Clínicos</h3>
          <p className="servicio-resumen">
            Diseño metodológico para estudios clínicos.
          </p>

          <div className={`servicio-detalle ${openProtocolos ? "show" : ""}`}>
            <h4>¿Qué aprenderás?</h4>
            <ul>
              <li><HeartPulse /> Formulación de preguntas clínicas</li>
              <li><CheckCircle /> Diseño de muestras y variables</li>
              <li><FileText /> Elaboración de consentimientos informados</li>
              <li><ClipboardCheck /> Registro institucional y ética</li>
            </ul>
            <p className="servicio-extra">
              Aprende a diseñar estudios clínicos y epidemiológicos
              con criterios éticos y metodológicos de alto nivel.
              Ideal para residentes, médicos en formación e
              investigadores clínicos.
            </p>
          </div>
        </article>

        {/* ===== CONSULTORÍA PARA LABORATORIOS ===== */}
        <article
          className="servicio-editor reveal"
          onClick={() => setOpenLaboratorios(!openLaboratorios)}
        >
          <span className="servicio-line"></span>
          <div className="servicio-icon"><Beaker /></div>

          <h3>Consultoría para Laboratorios</h3>
          <p className="servicio-resumen">
            Optimiza métodos, procesos y reactivos.
          </p>

          <div className={`servicio-detalle ${openLaboratorios ? "show" : ""}`}>
            <h4>¿Qué incluye?</h4>
            <ul>
              <li><CheckCircle /> Desarrollo y validación de métodos</li>
              <li><FlaskConical /> Diseño y optimización de reactivos</li>
              <li><Beaker /> Optimización de procedimientos</li>
              <li><ClipboardCheck /> Control de calidad y cumplimiento regulatorio</li>
            </ul>
            <p className="servicio-extra">
              Asesoría pensada para estudiantes de áreas
              químico-biológicas y profesionales que buscan
              fortalecer su perfil técnico y de laboratorio.
            </p>
          </div>
        </article>

      </section>
    </div>
  );
}
