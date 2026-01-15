import React from "react";
import {
  Stethoscope,
  Activity,
  Users,
  BookOpen,
  Award,
  Microscope,
  TestTube,
  Heart,
} from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-root">

      {/* HERO IMPACTO */}
      <section className="hero-impact">
        <div className="hero-impact-inner">

          <div className="hero-impact-text">
            <span className="hero-badge">Ciencia • Salud • Innovación</span>
            <h1>Dr. Omar Esteban Valencia Ledezma</h1>
            <p>
              Científico mexicano, líder en investigación aplicada en salud y
              biotecnología — Integración clínica, investigación y formación.
            </p>

            <div className="hero-metrics">
              <div>
                <strong>18+</strong>
                <span>Años de experiencia</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Publicaciones científicas</span>
              </div>
            </div>
          </div>

          <div className="hero-impact-card">
            <img
              src="https://via.placeholder.com/180x180.png?text=Dr+Omar"
              alt="Dr. Omar"
            />

            <div className="impact-lines">
              <div>
                <Stethoscope />
                <span>Doctor en Ciencias Biológicas y de la Salud (UAM)</span>
              </div>
              <div>
                <Activity />
                <span>Líder en INTEGRADORA MEDICA GASA</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BLOQUE BIO DESTACADO */}
      <section className="bio-highlight">
        <h2>Trayectoria Profesional</h2>
        <p>
          Doctor en Ciencias Biológicas y de la Salud (UAM) con más de 18
          años combinando investigación, docencia y desarrollo tecnológico.
          Actualmente lidera proyectos multicéntricos, validación de métodos y
          formación de talento en ciencia aplicada.
        </p>
      </section>

      {/* ESPECIALIDADES VISUALES */}
      <section className="specialties">
        <article>
          <Microscope />
          <h3>Investigación Científica</h3>
          <p>Metodologías avanzadas en biología molecular y diagnóstico.</p>
        </article>

        <article>
          <TestTube />
          <h3>Innovación Tecnológica</h3>
          <p>Desarrollo de reactivos, validación y digitalización en salud.</p>
        </article>

        <article>
          <Users />
          <h3>Formación Académica</h3>
          <p>Dirección de tesis y programas de posgrado con enfoque translacional.</p>
        </article>

        <article>
          <BookOpen />
          <h3>Publicaciones</h3>
          <p>40+ artículos en micología, farmacología y salud pública.</p>
        </article>

        <article>
          <Award />
          <h3>Reconocimientos</h3>
          <p>Premios nacionales e internacionales por excelencia académica.</p>
        </article>
      </section>

      {/* LÍNEAS CIENTÍFICAS – TARJETAS */}
      <section className="science-lines">
        <h2>Líneas Científicas</h2>

        <div className="science-grid">
          <div><Microscope /><span>Biología Molecular</span></div>
          <div><TestTube /><span>Bioquímica y Biocatálisis</span></div>
          <div><Heart /><span>Investigación Clínica</span></div>
          <div><Users /><span>Investigación Traslacional</span></div>
          <div><Stethoscope /><span>Cirugía y Medicina Interna</span></div>
        </div>
      </section>

      {/* TIMELINE ELEGANTE */}
      <section className="timeline-elegant">
        <h2>Experiencia y Logros</h2>

        <div className="timeline-cards">
          <div>
            <span>2006 – 2010</span>
            <p>Industria farmacéutica: químico analítico y validación de métodos.</p>
          </div>

          <div>
            <span>2010 – 2018</span>
            <p>Docencia y supervisión de proyectos académicos en universidades.</p>
          </div>

          <div>
            <span>2018 – 2025</span>
            <p>
              Liderazgo en investigación clínica y proyectos multicéntricos
              en INTEGRADORA MEDICA GASA.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
