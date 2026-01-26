import React, { useEffect, useRef } from "react";
import {
  Microscope,
  TestTube,
  HeartPulse,
  Activity,
  Hospital,
  Database,
  Wrench,
  Stethoscope,
  CheckCircle
} from "lucide-react"; // Eliminé Users porque no se usaba
import "../styles/Home.css";
import LogoOmega from "../assets/LogoN.png";

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    // Capturamos la referencia actual para evitar advertencia de React
    const currentSections = sectionsRef.current;

    return () => {
      currentSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const setRefs = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <main className="home-root">

      {/* HERO */}
      <section className="hero-impact section-transition-1" ref={(el) => setRefs(el, 0)}>
        <div className="hero-impact-inner">
          <div className="hero-impact-text">
            <span className="hero-badge">Ciencia • Salud • Investigación</span>
            <h1>Consultoría Científica Alfa Omega</h1>
            <p>
              ¿Quién te realizará la revisión de tu tesis?
              <br />
              Grupo Omega cuenta con más de <strong>15 años de experiencia</strong> en
              investigación científica aplicada en salud.
            </p>

            <div className="hero-metrics">
              <div>
                <strong>15+</strong>
                <span>Años de experiencia</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Publicaciones científicas</span>
              </div>
              <div>
                <strong>45+</strong>
                <span>Congresos internacionales</span>
              </div>
            </div>
          </div>

          <div className="hero-impact-card">
            <img src={LogoOmega} alt="Grupo Omega" className="omega-logo" />
            <div className="impact-lines">
              <div>
                <Microscope />
                <span>Investigación científica aplicada</span>
              </div>
              <div>
                <Hospital />
                <span>Consultoría clínica y hospitalaria</span>
              </div>
              <div>
                <Database />
                <span>Protocolos, tesis y publicaciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="bio-highlight section-transition-2" ref={(el) => setRefs(el, 1)}>
        <h2>¿Quiénes Somos?</h2>
        <p>
          El <strong>Grupo Omega</strong> integra especialistas en investigación clínica,
          biología molecular, bioquímica, farmacología y salud pública, con enfoque
          en publicación científica y rigor metodológico.
        </p>
      </section>

      {/* POR QUÉ TRABAJAR CON GRUPO OMEGA */}
      <section className="why-omega section-transition-3" ref={(el) => setRefs(el, 2)}>
        <h2>¿Por qué trabajar con GRUPO OMEGA?</h2>
        <div className="why-grid">
          <div><CheckCircle /><span>Más de 15 años de investigación científica aplicada</span></div>
          <div><CheckCircle /><span>Más de 40 publicaciones nacionales e internacionales</span></div>
          <div><CheckCircle /><span>Jefatura de Investigación en el sector salud</span></div>
          <div><CheckCircle /><span>Experiencia en protocolos clínicos y metodologías validadas</span></div>
          <div><CheckCircle /><span>Participación en más de 45 congresos nacionales e internacionales</span></div>
          <div><CheckCircle /><span>Liderazgo en proyectos de calidad y seguridad del paciente</span></div>
          <div><CheckCircle /><span>Formación de más de 20 tesis de licenciatura, maestría y especialidades</span></div>
          <div><CheckCircle /><span>Experiencia docente en UNAM, UAM, IPN, UACM, UAEH y UAEMex</span></div>
        </div>
      </section>

      {/* ÁREAS DE MAYOR IMPACTO PROFESIONAL */}
      <section className="impact-areas section-transition-4" ref={(el) => setRefs(el, 3)}>
        <h2>Áreas de Mayor Impacto Profesional</h2>
        <div className="flip-grid">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Microscope />
                <h3>Biología Molecular y Diagnóstico</h3>
              </div>
              <div className="flip-back">
                <p>
                  Identificación de hongos, bacterias y virus mediante tecnologías
                  moleculares. Estudios genéticos, expresión de receptores ACE2 y
                  diagnóstico diferencial en COVID-19.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Activity />
                <h3>Investigación Clínica y Epidemiología</h3>
              </div>
              <div className="flip-back">
                <p>
                  Generación de evidencia para mejorar políticas públicas,
                  seguridad del paciente y calidad hospitalaria. Proyectos en
                  inmunidad, neurocríticos, COVID-19 y salud materna.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <TestTube />
                <h3>Bioquímica y Desarrollo Tecnológico</h3>
              </div>
              <div className="flip-back">
                <p>
                  Metabolitos microbianos, biocatálisis enzimática, moléculas
                  bioactivas y validación de métodos en sistemas diagnósticos y
                  tecnologías hospitalarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS CIENTÍFICAS INTEGRADAS */}
      <section className="integrated-areas section-transition-5" ref={(el) => setRefs(el, 4)}>
        <h2>Áreas Científicas Integradas por GRUPO OMEGA</h2>
        <div className="integrated-grid">
          <div><Microscope /><span>Biotecnología</span></div>
          <div><TestTube /><span>Ciencias Biomédicas</span></div>
          <div><Hospital /><span>Salud Clínica</span></div>
          <div><Database /><span>Diagnóstico Molecular</span></div>
          <div><TestTube /><span>Metabolitos Microbianos</span></div>
          <div><Activity /><span>Investigación Clínica</span></div>
          <div><HeartPulse /><span>Salud Pública</span></div>
          <div><Wrench /><span>Desarrollo Tecnológico</span></div>
          <div><Stethoscope /><span>Cirugía y Casos Complejos</span></div>
        </div>
      </section>

      {/* LÍNEAS CIENTÍFICAS */}
      <section className="science-lines section-transition-6" ref={(el) => setRefs(el, 5)}>
        <h2>Líneas Científicas que Lidera</h2>
        <div className="science-grid">
          {/* Contenido igual */}
          {/* ... */}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonials section-transition-7" ref={(el) => setRefs(el, 6)}>
        <h2>Testimonios Profesionales</h2>
        <div className="testimonials-grid">
          {/* Contenido igual */}
          {/* ... */}
        </div>
      </section>

    </main>
  );
}
