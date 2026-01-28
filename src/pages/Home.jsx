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
  CheckCircle,
  BookOpen
} from "lucide-react";
import "../styles/Home.css";

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const currentSections = sectionsRef.current;

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setRefs = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <main className="home-root">

      {/* HERO */}
      <section
        className="hero-impact section-transition-1"
        ref={(el) => setRefs(el, 0)}
      >
        <div className="hero-impact-inner">
          <div className="hero-impact-text">
            <span className="hero-badge">Ciencia • Salud • Investigación</span>
            <h1>Consultoría Científica Alfa Omega</h1>
            <p>
              ¿Quién te realizará la revisión de tu tesis?
              <br />
              Grupo Omega cuenta con más de <strong>15 años de experiencia</strong> en investigación científica aplicada en salud.
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
            {/* Cambiado a public/logo.png */}
            <img src="/logo.png" alt="Grupo Omega" className="omega-logo" />
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
      <section
        className="bio-highlight section-transition-2"
        ref={(el) => setRefs(el, 1)}
      >
        <h2>¿Quiénes Somos?</h2>
        <p>
          El <strong>Grupo Omega</strong> integra especialistas en investigación clínica,
          biología molecular, bioquímica, farmacología y salud pública, con enfoque
          en publicación científica y rigor metodológico.
        </p>
      </section>

      {/* POR QUÉ OMEGA */}
      <section
        className="why-omega section-transition-3"
        ref={(el) => setRefs(el, 2)}
      >
        <h2>¿Por qué trabajar con GRUPO OMEGA?</h2>
        <div className="why-grid">
          <div><CheckCircle /><span>Más de 15 años de investigación científica aplicada</span></div>
          <div><CheckCircle /><span>Más de 40 publicaciones nacionales e internacionales</span></div>
          <div><CheckCircle /><span>Jefatura de Investigación en el sector salud</span></div>
          <div><CheckCircle /><span>Experiencia en protocolos clínicos y metodologías validadas</span></div>
          <div><CheckCircle /><span>Participación en más de 45 congresos nacionales e internacionales</span></div>
          <div><CheckCircle /><span>Liderazgo en proyectos de calidad y seguridad del paciente</span></div>
          <div><CheckCircle /><span>Formación de más de 20 tesis</span></div>
          <div><CheckCircle /><span>Experiencia docente universitaria</span></div>
        </div>
      </section>

      {/* ÁREAS DE MAYOR IMPACTO */}
      <section
        className="impact-areas section-transition-4"
        ref={(el) => setRefs(el, 3)}
      >
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
                  Identificación de hongos, bacterias y virus mediante tecnologías moleculares.
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
                  Evidencia científica para calidad hospitalaria y políticas públicas.
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
                  Metabolitos microbianos y tecnologías diagnósticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS INTEGRADAS */}
      <section
        className="integrated-areas section-transition-5"
        ref={(el) => setRefs(el, 4)}
      >
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
      <section
        className="science-lines section-transition-6"
        ref={(el) => setRefs(el, 5)}
      >
        <h2>Líneas Científicas que Lidera</h2>
        <div className="science-grid">
          <div className="science-card"><BookOpen /><h3>Biología Molecular y Diagnóstico</h3><p>PCR, RT-PCR, qPCR, oncología molecular, genética médica y diagnóstico de enfermedades infecciosas en hospitales, laboratorios clínicos e industria biotecnológica.</p></div>
          <div className="science-card"><BookOpen /><h3>Bioinformática y Análisis de Datos</h3><p>Análisis de datos ómicos, secuenciación masiva (NGS), Big Data biomédico e inteligencia artificial aplicada a medicina de precisión.</p></div>
          <div className="science-card"><BookOpen /><h3>Farmacología Clínica y Farmacovigilancia</h3><p>Ensayos clínicos, seguridad de medicamentos, estudios de efectividad, costo-beneficio y evaluación terapéutica en industria y hospitales.</p></div>
          <div className="science-card"><BookOpen /><h3>Investigación Clínica y Metodología</h3><p>Diseño de protocolos, bioestadística, redacción científica, publicaciones indexadas y gestión de proyectos de investigación.</p></div>
          <div className="science-card"><BookOpen /><h3>Epidemiología y Salud Pública</h3><p>Vigilancia epidemiológica, epidemiología clínica y evaluación de programas de salud en instituciones públicas y privadas.</p></div>
          <div className="science-card"><BookOpen /><h3>Gestión de Calidad y Acreditación</h3><p>Implementación de ISO 15189, ISO 9001, Buenas Prácticas de Laboratorio y certificaciones hospitalarias como consultoría especializada.</p></div>
          <div className="science-card"><BookOpen /><h3>Biotecnología Aplicada a la Salud</h3><p>Desarrollo de kits diagnósticos, biomarcadores, vacunas y terapias avanzadas con alto impacto clínico y tecnológico.</p></div>
          <div className="science-card"><BookOpen /><h3>Microbiología Clínica</h3><p>Diagnóstico microbiológico, resistencia antimicrobiana, control de infecciones y estudios clínicos hospitalarios.</p></div>
          <div className="science-card"><BookOpen /><h3>Economía de la Salud</h3><p>Evaluación de tecnologías sanitarias, análisis costo-efectividad, impacto presupuestal y estudios farmacoeconómicos.</p></div>
          <div className="science-card"><BookOpen /><h3>Educación en Ciencias de la Salud</h3><p>Docencia universitaria, diplomados, cursos de educación continua y capacitación especializada para personal de salud.</p></div>
        </div>
      </section>

      {/* TESTIMONIOS PROFESIONALES */}
      <section
        className="testimonials section-transition-7"
        ref={(el) => setRefs(el, 6)}
      >
        <h2>Testimonios Profesionales</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "La asesoría con el grupo Omega fue determinante para fortalecer la metodología
              y el análisis estadístico de mi tesis. Su rigor científico marca una diferencia real."
            </p>
            <span>Tesista de Maestría en Ciencias Biomédicas</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Su experiencia en investigación clínica y salud pública le permitió estructurar
              un protocolo sólido, ético y viable para publicación científica.”
            </p>
            <span>Médico Residente – Investigación Clínica</span>
          </div>

          <div className="testimonial-card">
            <p>
              "El acompañamiento fue claro, profesional y altamente especializado.
              Se nota la experiencia real en biología molecular y diagnóstico."
            </p>
            <span>Licenciado en Biotecnología</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Gracias a su asesoría, mi trabajo cumplió estándares académicos exigidos
              por comités científicos y revisores externos.”
            </p>
            <span>Estudiante de Doctorado en Ciencias de la Salud</span>
          </div>
        </div>
      </section>

    </main>
  );
}
