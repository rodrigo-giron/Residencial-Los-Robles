import { useState } from "react";
import "./App.css";

function App() {
  const [vista, setVista] = useState("login");
  const [sesion, setSesion] = useState(false);

  const iniciarSesion = (e) => {
    e.preventDefault();
    setSesion(true);
    setVista("inicio");
  };

  const cerrarSesion = () => {
    setSesion(false);
    setVista("login");
  };

  if (!sesion) {
    return (
      <div className="login-page">
        <div className="login-card">

          <div className="login-logo">🏠</div>

          <h1>Residencial Los Robles</h1>
          <p className="login-subtitle">
            Acceso para residentes
          </p>

          {vista === "login" ? (
            <>
              <form onSubmit={iniciarSesion}>

                <label>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  required
                />

                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                />

                <button className="boton-login" type="submit">
                  Iniciar sesión
                </button>

              </form>

              <p className="cambiar-formulario">
                ¿No tienes una cuenta?
                <button onClick={() => setVista("registro")}>
                  Crear cuenta
                </button>
              </p>
            </>
          ) : (
            <>
              <form onSubmit={iniciarSesion}>

                <label>Nombre completo</label>
                <input
                  type="text"
                  placeholder="Nombre del residente"
                  required
                />

                <label>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  required
                />

                <label>Número de casa</label>
                <input
                  type="text"
                  placeholder="Ej. 125"
                  required
                />

                <label>Contraseña</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                />

                <button className="boton-login" type="submit">
                  Crear cuenta
                </button>

              </form>

              <p className="cambiar-formulario">
                ¿Ya tienes una cuenta?
                <button onClick={() => setVista("login")}>
                  Iniciar sesión
                </button>
              </p>
            </>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="app">

      <header className="header">

        <div className="logo">
          <span>🏠</span>

          <div>
            <h1>Residencial Los Robles</h1>
            <p>Comunidad y administración</p>
          </div>
        </div>

        <nav>
          <button onClick={() => setVista("inicio")}>
            Inicio
          </button>

          <button onClick={() => setVista("cuotas")}>
            Mis cuotas
          </button>

          <button onClick={() => setVista("avisos")}>
            Avisos
          </button>

          <button onClick={() => setVista("perfil")}>
            Mi perfil
          </button>

          <button onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </nav>

      </header>

      <main>

        {vista === "inicio" && (
          <section className="bienvenida">

            <div>
              <span className="etiqueta">
                APLICACIÓN RESIDENCIAL
              </span>

              <h2>
                Bienvenido a
                <br />
                Los Robles
              </h2>

              <p>
                Consulta tus cuotas, revisa tus adeudos y mantente
                informado sobre todo lo que ocurre en nuestra comunidad.
              </p>

              <div className="botones">

                <button
                  className="boton-principal"
                  onClick={() => setVista("cuotas")}
                >
                  Consultar mis cuotas
                </button>

                <button
                  className="boton-secundario"
                  onClick={() => setVista("avisos")}
                >
                  Ver avisos
                </button>

              </div>
            </div>

            <div className="tarjeta-resumen">

              <h3>Resumen de cuenta</h3>

              <div className="saldo">
                <span>Adeudo actual</span>
                <strong>$850.00</strong>
              </div>

              <div className="estado">
                <span>●</span> Pago pendiente
              </div>

              <hr />

              <div className="dato">
                <span>Próxima fecha de pago</span>
                <strong>10 de septiembre</strong>
              </div>

            </div>

          </section>
        )}

        {vista === "cuotas" && (
          <section className="pagina">

            <span className="etiqueta">HU-02</span>

            <h2>Mis cuotas y adeudos</h2>

            <p>
              Consulta el estado de tus pagos de mantenimiento.
            </p>

            <div className="cuotas-grid">

              <div className="cuota">
                <span>Agosto 2026</span>
                <strong>$850.00</strong>
                <small className="pendiente">
                  Pendiente
                </small>
              </div>

              <div className="cuota pagada">
                <span>Julio 2026</span>
                <strong>$850.00</strong>
                <small>✓ Pagado</small>
              </div>

              <div className="cuota pagada">
                <span>Junio 2026</span>
                <strong>$850.00</strong>
                <small>✓ Pagado</small>
              </div>

            </div>

            <div className="total">
              <span>Adeudo total</span>
              <strong>$850.00</strong>
            </div>

          </section>
        )}

        {vista === "avisos" && (
          <section className="pagina">

            <span className="etiqueta">
              COMUNICACIÓN
            </span>

            <h2>Avisos de la comunidad</h2>

            <div className="aviso">

              <h3>Asamblea vecinal</h3>

              <p>
                Se invita a todos los residentes a la próxima
                asamblea de la comunidad.
              </p>

              <small>
                Publicado recientemente
              </small>

            </div>

            <div className="aviso">

              <h3>Mantenimiento de áreas comunes</h3>

              <p>
                El próximo fin de semana se realizarán trabajos
                de mantenimiento en las áreas comunes.
              </p>

              <small>
                Publicado recientemente
              </small>

            </div>

          </section>
        )}

        {vista === "perfil" && (
          <section className="pagina">

            <span className="etiqueta">
              HU-01
            </span>

            <h2>Mi perfil</h2>

            <div className="perfil">

              <div className="avatar">
                R
              </div>

              <div>
                <h3>Residente</h3>
                <p>Casa 125 · Los Robles</p>
                <p>residente@losrobles.mx</p>
              </div>

            </div>

          </section>
        )}

      </main>

      <footer>

        <p>
          © 2026 Residencial Los Robles
        </p>

        <p>
          Proyecto académico · Scrum Sprint 1
        </p>

      </footer>

    </div>
  );
}

export default App;