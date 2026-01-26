import "../styles/Analisis.css";
import { 
  Beaker, 
  Microscope,
  BrainCircuit,
  Activity,
  Stethoscope,
  BarChart3,
  PieChart,
  FileText
} from "lucide-react"; // Eliminé BookOpen que no se usa

export default function Analisis() {
  return (
    <div className="analisis-container">
      
      {/* Encabezado */}
      <div className="analisis-header">
        <h1 className="analisis-title">Análisis</h1>
        <p className="analisis-subtitle">
          Este apartado resume las capacidades técnicas y las líneas de investigación dirigidas.
        </p>
      </div>

      {/* TARJETAS – LÍNEAS CIENTÍFICAS */}
      <section className="analisis-section">
        <h2 className="section-title">Áreas de Especialización Científica</h2>

        <div className="cards-grid">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Microscope size={48} />
                <h3>Biología Molecular</h3>
              </div>
              <div className="flip-back">
                Diagnóstico de patógenos, técnicas moleculares y análisis genético.
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Beaker size={48} />
                <h3>Bioquímica & Biocatálisis</h3>
              </div>
              <div className="flip-back">
                Procesos bioquímicos, síntesis y compuestos farmacéuticos.
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Activity size={48} />
                <h3>Salud Pública</h3>
              </div>
              <div className="flip-back">
                Investigación clínica, epidemiología y análisis poblacional.
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <BrainCircuit size={48} />
                <h3>Traslacional</h3>
              </div>
              <div className="flip-back">
                Innovación biomédica y desarrollo tecnológico en salud.
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <Stethoscope size={48} />
                <h3>Medicina Clínica</h3>
              </div>
              <div className="flip-back">
                Casuística hospitalaria, cirugía y medicina interna.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="analisis-section">
        <h2 className="section-title">Soporte en Análisis de Datos</h2>

        <div className="soft-grid">
          <div className="soft-item"><BarChart3 size={40}/> Excel</div>
          <div className="soft-item"><BarChart3 size={40}/> SPSS</div>
          <div className="soft-item"><PieChart size={40}/> R</div>
          <div className="soft-item"><BarChart3 size={40}/> JASP</div>
          <div className="soft-item"><PieChart size={40}/> Stata</div>
        </div>

        <p className="soft-note">
          El servicio incluye selección de pruebas, interpretación y reporte.
        </p>
      </section>

      {/* PUBLICACIÓN */}
      <section className="analisis-section">
        <h2 className="section-title">Soporte en Publicación Científica</h2>

        <div className="public-box">
          <FileText size={50} />
          <p>
            Apoyo en organización de resultados, redacción IMRyD, tablas y gráficas,
            selección de revista y respuesta a revisores.
          </p>
        </div>
      </section>

    </div>
  );
}
