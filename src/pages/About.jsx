import "../styles/About.css";
import {
  Stethoscope,
  Microscope,
  GraduationCap,
  Users,
  ShieldCheck,
  Target,
  Activity,
  FlaskConical,
} from "lucide-react";
import Logo from "../assets/logo.png";

export default function About() {
  return (
    <div className="about-wrapper">

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero-content">
          <img src={Logo} alt="Alpha & Omega Logo" className="hero-logo" />
          <h1 className="hero-title">Alpha & Omega Research</h1>
          <p className="hero-text">
            Excelencia Científica, Ética Profesional y Compromiso con la Salud.
          </p>
        </div>
      </section>

      {/* ---------------- QUIÉNES SOMOS ---------------- */}
      <section className="about-section">
        <div className="about-text">
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="section-description">
            Somos un equipo especializado en investigación clínica, biotecnológica
            y ciencias de la salud con un enfoque en integridad académica,
            rigor científico y resultados confiables. Nuestro compromiso es
            impulsar el avance del conocimiento con métodos sólidos y
            acompañamiento profesional.
          </p>
        </div>

        <div className="about-icons">
          <div className="icon-card">
            <Stethoscope className="icon" />
            <h3>Experiencia Clínica</h3>
            <p>Más de 15 años en investigación médica aplicada.</p>
          </div>

          <div className="icon-card">
            <Microscope className="icon" />
            <h3>Investigación Avanzada</h3>
            <p>Procesos científicos con estándares internacionales.</p>
          </div>

          <div className="icon-card">
            <GraduationCap className="icon" />
            <h3>Formación Académica</h3>
            <p>Dirección de tesis, publicaciones y asesorías expertas.</p>
          </div>
        </div>
      </section>

      {/* ---------------- NUESTRO ENFOQUE ---------------- */}
      <section className="focus-section">
        <h2 className="section-title">Nuestro Enfoque</h2>

        <div className="focus-grid">
          <div className="focus-card">
            <FlaskConical className="icon focus-icon" />
            <h3>Metodología Científica</h3>
            <p>
              Aplicamos protocolos rigurosos para garantizar resultados confiables
              y reproducibles.
            </p>
          </div>

          <div className="focus-card">
            <Activity className="icon focus-icon" />
            <h3>Análisis de Datos</h3>
            <p>
              Evaluaciones estadísticas profesionales para asegurar precisión
              en cada proyecto.
            </p>
          </div>

          <div className="focus-card">
            <Users className="icon focus-icon" />
            <h3>Acompañamiento Experto</h3>
            <p>
              Asesoría personalizada y seguimiento continuo en cada etapa.
            </p>
          </div>

          <div className="focus-card">
            <ShieldCheck className="icon focus-icon" />
            <h3>Ética y Transparencia</h3>
            <p>
              Trabajo profesional con honestidad, confidencialidad y respeto.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- MISIÓN, VISIÓN, VALORES ---------------- */}
      <section className="mvv-section">
        <h2 className="section-title">Nuestra Filosofía</h2>

        <div className="mvv-grid">
          <div className="mvv-card">
            <Target className="icon mvv-icon" />
            <h3>Misión</h3>
            <p>
              Impulsar investigaciones con calidad científica excepcional,
              ayudando a estudiantes y profesionales a alcanzar sus metas.
            </p>
          </div>

          <div className="mvv-card">
            <Activity className="icon mvv-icon" />
            <h3>Visión</h3>
            <p>
              Convertirnos en un referente nacional en asesoría de investigación
              en ciencias de la salud.
            </p>
          </div>

          <div className="mvv-card">
            <ShieldCheck className="icon mvv-icon" />
            <h3>Valores</h3>
            <ul>
              <li>Rigor Científico</li>
              <li>Ética Profesional</li>
              <li>Transparencia</li>
              <li>Excelencia Académica</li>
              <li>Confidencialidad</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
