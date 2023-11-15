import './paginaInicio.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="image-container">
        <img
          src="src/assets/Inicio.png"
          className="university-image"
        />
      </div>
      <header>
        <h1>Bienvenidos a la Universidad Tecnológica del Norte de Guanajuato</h1>
        <p>
          La educación va más allá de la memorización; es un camino para inspirar, innovar y transformar.
          Cada libro que abres te lleva a un nuevo mundo, y cada práctica que realizas te ayuda a moldear el tuyo.
          Estamos emocionados de que te unas a nuestra comunidad y compartas nuestro compromiso con la excelencia académica y los valores fundamentales que nos guían.
        </p>
      </header>
      <div className="cards">
        <div className="card mission-card">
          <h2>Misión</h2>
          <p>
            Somos una institución de Educación Superior Tecnológica dedicada a la formación integral de profesionales líderes en los niveles de Técnico Superior Universitario y Licenciatura, ofreciendo programas educativos de excelencia.
          </p>
        </div>
        <div className="card vision-card">
          <h2>Visión</h2>
          <p>
            Para el año 2026, la Universidad Tecnológica del Norte de Guanajuato se destacará a nivel nacional e internacional por la formación de egresados altamente competitivos que se integran exitosamente al ámbito laboral, destacando por su sólida formación humana e integral. Nos enfocamos en promover la igualdad y la no discriminación, el desarrollo sostenible y la preservación del medio ambiente, así como el respeto de los derechos humanos.
          </p>
        </div>
        <div className="card valores-card">
          <h2>Valores</h2>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Comunicación</li>
            <li>Honestidad</li>
            <li>Respeto</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
