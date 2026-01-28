import "../styles/About.css";
import {
  Microscope,
  Activity,
  FlaskConical,
  Stethoscope,
  BookOpen,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Logo from "../assets/logo.png";

export default function About() {
  return (
    <div className="about-wrapper">

      {/* ===== HERO ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>GRUPO OMEGA</h1>
            <p>
              Grupo Omega, multidisciplinario, con más de <strong>15 años</strong> integrando biología molecular, 
              microbiología clínica, farmacología, salud pública y análisis científico aplicado. 
              Contribuye activamente al desarrollo de soluciones innovadoras para el diagnóstico, 
              prevención y análisis de enfermedades de alto impacto poblacional.
            </p>

            <div className="about-metrics">
              <div>
                <strong>15+</strong>
                <span>Años de trayectoria</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Artículos científicos</span>
              </div>
              <div>
                <strong>45+</strong>
                <span>Congresos internacionales</span>
              </div>
            </div>
          </div>

          <div className="about-hero-image">
            <img src={Logo} alt="Grupo Omega" className="about-logo" />
          </div>
        </div>
      </section>

      {/* ===== PERFIL PROFESIONAL ===== */}
      <section className="about-section">
        <h2>Perfil Profesional del Grupo Omega</h2>

        <div className="about-grid">
          <div className="about-card">
            <Microscope />
            <h3>Enfoque Científico</h3>
            <p>
              El Grupo Omega está conformado por un 
              equipo multidisciplinario con sólida 
              formación en ciencias biológicas y de la 
              salud, integrando biología molecular, 
              bioquímica, microbiología y análisis científico 
              aplicado para la generación de conocimiento 
              e innovación en salud.
            </p>
          </div>

          <div className="about-card">
            <TrendingUp />
            <h3>Experiencia y Liderazgo</h3>
            <p>
              El Grupo Omega lidera y desarrolla proyectos 
              de investigación científica, clínica y aplicada, 
              coordinando equipos multidisciplinarios, 
              diseñando protocolos y generando evidencia 
              científica para la toma de decisiones 
              estratégicas en el ámbito de la salud y la 
              biotecnología.
            </p>
          </div>

          <div className="about-card">
            <BookOpen />
            <h3>Producción Científica</h3>
            <ul>
              <li>Producción constante de artículos documentos científicos y técnicos.</li>
              <li>Participación activa en congresos, foros y eventos especializados.</li>
              <li>Colaboraciones nacionales e internacionales en proyectos de investigación.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TRAYECTORIA PROFESIONAL (LÍNEA DE TIEMPO) ===== */}
      <section className="timeline-section">
        <h2>Trayectoria Profesional</h2>

        <div className="timeline-centered">
          <div className="timeline-item left">
            <span>2008</span>
            <p>
              <strong>Formación y Bases Científicas</strong><br />
              Desarrollo de competencias en biotecnología, biología molecular, 
              farmacología y técnicas de laboratorio clínico. 
              Inicio en investigación académica.
            </p>
          </div>

          <div className="timeline-item right">
            <span>2012</span>
            <p>
              <strong>Investigación Clínica y Salud Pública</strong><br />
              Participación en estudios epidemiológicos, validación de pruebas diagnósticas,
              vigilancia de enfermedades y evaluación de intervenciones en salud.
            </p>
          </div>

          <div className="timeline-item left">
            <span>2020</span>
            <p>
              <strong>Consolidación Profesional</strong><br />
              Diversificación de líneas científicas, publicación internacional,
              formación de nuevos investigadores y liderazgo institucional en proyectos de alto impacto.
            </p>
          </div>

          <div className="timeline-item right">
            <span>2021</span>
            <p>
              <strong>Apoyo a Proyectos Científicos y Formación de Recursos Humanos</strong><br />
              Acompañamiento integral en el desarrollo de proyectos científicos, tesis, protocolos de investigación y publicaciones académicas.
              Formación y capacitación de recursos humanos en investigación, fortaleciendo competencias metodológicas, analíticas y éticas en distintos niveles académicos.
            </p>
          </div>

          <div className="timeline-item left">
            <span>2022 – Actualidad</span>
            <p>
              <strong>Desarrollo de actividades científicas enfocadas en investigación en salud</strong><br />
              Acompañamiento integral en el desarrollo de proyectos científicos, tesis, protocolos de investigación y publicaciones académicas.
              Formación y capacitación de recursos humanos en investigación, fortaleciendo competencias metodológicas, analíticas y éticas en distintos niveles académicos.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LÍNEAS CIENTÍFICAS ===== */}
      <section className="about-section">
        <h2>Líneas Científicas</h2>

        <div className="about-grid">
          <div className="about-card">
            <Microscope />
            <h3>Biología Molecular</h3>
            <p>
              PCR, qPCR, secuenciación, análisis genético y diagnóstico molecular.
            </p>
          </div>

          <div className="about-card">
            <Activity />
            <h3>Microbiología Clínica</h3>
            <p>
              Identificación de patógenos, susceptibilidad antimicrobiana
              y análisis epidemiológico.
            </p>
          </div>

          <div className="about-card">
            <FlaskConical />
            <h3>Farmacología y Bioquímica</h3>
            <p>
              Evaluación de compuestos bioactivos y desarrollo terapéutico.
            </p>
          </div>

          <div className="about-card">
            <Stethoscope />
            <h3>Clínica de Investigación</h3>
            <p>
              Diseño de protocolos clínicos, análisis estadístico y ética.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISIÓN VISIÓN VALORES ===== */}
      <section className="about-section">
        <h2>Misión, Visión y Valores</h2>

        <div className="about-grid">
          <div className="about-card">
            <Target />
            <h3>Misión</h3>
            <p>
              Impulsar el avance científico mediante 
              investigación rigurosa, divulgación académica 
              y acompañamiento integral para estudiantes, 
              profesionales e instituciones que buscan 
              fortalecer la calidad de sus proyectos.
            </p>
          </div>

          <div className="about-card">
            <TrendingUp />
            <h3>Visión</h3>
            <p>
              Convertirse en referente nacional e 
              internacional en investigación científica 
              aplicada, formación académica y generación 
              de conocimiento de alto impacto.
            </p>
          </div>

          <div className="about-card">
            <ShieldCheck />
            <h3>Valores</h3>
            <ul>
              <li>Rigor metodológico</li>
              <li>Integridad científica</li>
              <li>Innovación constante</li>
              <li>Excelencia y compromiso academico</li>
              <li>Confidencialidad y ética profesional</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
