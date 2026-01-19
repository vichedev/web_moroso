import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="glass-card">
        <div className="icon-wrapper">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="brand-logo">
          ISP<span>MAX</span>
        </h1>

        <div className="divider"></div>

        <div className="message-content">
          <h2>Servicio Suspendido</h2>
          <p>
            Detectamos un pago pendiente en tu cuenta. Para seguir disfrutando
            de la máxima velocidad, por favor regulariza tu situación.
          </p>
        </div>

        <button
          className="btn-primary"
          onClick={() => window.location.reload()}
        >
          Ya realicé mi pago
        </button>

        <div className="support-info">
          <p>¿Necesitas ayuda? Contacta a soporte técnico</p>
          <span className="phone">NUMERO DE SOPORTE</span>
        </div>
      </div>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </div>
  );
}

export default App;
