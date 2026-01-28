import "../styles/Proceso.css";

export default function Proceso() {
  const steps = [
    {
      number: "01",
      title: "Tú nos contactas",
      desc: `Tienes una idea, una tarea, un protocolo, un ensayo o un proyecto… ¡y no sabes por dónde empezar!
      
Nos escribes y nos cuentas qué necesitas en pocas palabras.

Número de teléfono: 525548284917
Correo electrónico: alphaomegaovl1@gmail.com`,
    },
    {
      number: "02",
      title: "Analizamos tu caso",
      desc: `Analizamos tu nivel académico, tu objetivo, tu fecha límite y los requisitos de tu escuela o institución.

Te orientamos para aterrizar la idea y convertirla en algo claro, viable y con sentido académico.`,
    },
    {
      number: "03",
      title: "Propuesta clara",
      desc: `Sin confusiones, sin letra pequeña.

Recibes una propuesta clara, honesta y bien estructurada donde te explicamos qué haremos, cómo lo haremos y en qué tiempos recibirás cada avance.

Definimos objetivos, alcances y entregables desde el inicio para que sepas exactamente qué esperar en cada etapa del proceso.

Tú tienes el control en todo momento: revisas la propuesta, haces preguntas, ajustamos lo necesario y decides con total tranquilidad si avanzamos.`,
    },
    {
      number: "04",
      title: "Trabajo colaborativo",
      desc: `Aquí ocurre la magia:

- Asesoría personalizada
- Apoyo metodológico
- Revisión de borradores
- Construcción del proyecto
- Análisis estadístico (si aplica)
- Redacción científica

Trabajamos hasta que tu proyecto quede sólido y profesional.`,
    },
    {
      number: "05",
      title: "Entrega final",
      desc: `Tu trabajo llega completo, claro y listo para entregar o enviar:

- Tarea o ensayo terminado
- Protocolo clínico o de investigación
- Proyecto académico completo
- Mano final para publicación científica
- Artículo científico listo para revista

Además, si lo deseas, seguimos contigo para los ajustes finales o el envío a revista.`,
    },
  ];

  return (
    <div className="proceso-container">
      <h1 className="proceso-title">Nuestro método</h1>
      <p className="proceso-intro">
        Un proceso claro, humano y científico.
        <br />
        Te acompañamos desde la idea inicial hasta el resultado final, con estructura, rigor y acompañamiento real.
      </p>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step slide-reveal">
            <div className="step-icon">{step.number}</div>
            <div className="step-content">
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ESLOGAN FINAL ===== */}
      <div className="proceso-eslogan slide-reveal">
        TU PROYECTO NO AVANZA SOLO
        <br />
        AVANZA CONTIGO.
      </div>
    </div>
  );
}
