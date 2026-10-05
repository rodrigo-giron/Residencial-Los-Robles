import { useState } from "react";
import "./App.css";

function App() {
  const [vista, setVista] = useState("login");
  const [sesion, setSesion] = useState(false);
  const [pagoRealizado, setPagoRealizado] = useState(false);

  const iniciarSesion = (e) => {
    e.preventDefault();
    setSesion(true);
    setVista("inicio");
  };

  const cerrarSesion = () => {
    setSesion(false);
    setVista("login");
  };

  const realizarPago = () => {
    setPagoRealizado(true);
  };

  if (!sesion) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">🏠</div>

          <h1>Residencial Los Robles</h1>
          <p className="login-subtitle">Acceso para residentes</p>

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
          <button onClick={() => setVista("inicio")}>Inicio</button>

          <button onClick={() => setVista("cuotas")}>Mis cuotas</button>

          <button onClick={() => setVista("pagos")}>Pagos</button>

          <button onClick={() => setVista("avisos")}>Avisos</button>

          <button onClick={() => setVista("perfil")}>Mi perfil</button>

          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </nav>
      </header>

      <main>
        {vista === "inicio" && (
          <section className="bienvenida">
            <div>
              <span className="etiqueta">APLICACIÓN RESIDENCIAL</span>

              <h2>
                Bienvenido a
                <br />
                Los Robles
              </h2>

              <p>
                Consulta tus cuotas, realiza pagos y mantente informado
                sobre todo lo que ocurre en nuestra comunidad.
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
                  onClick={() => setVista("pagos")}
                >
                  Gestionar pagos
                </button>
              </div>
            </div>

            <div className="tarjeta-resumen">
              <h3>Resumen de cuenta</h3>

              <div className="saldo">
                <span>Adeudo actual</span>
                <strong>{pagoRealizado ? "$0.00" : "$850.00"}</strong>
              </div>

              <div className={pagoRealizado ? "estado pagado-texto" : "estado"}>
                <span>●</span>{" "}
                {pagoRealizado ? "Cuenta al corriente" : "Pago pendiente"}
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
            <span className="etiqueta">P-02</span>

            <h2>Mis cuotas y adeudos</h2>

            <p>Consulta el estado de tus pagos de mantenimiento.</p>

            <div className="cuotas-grid">
              <div className={`cuota ${pagoRealizado ? "pagada" : ""}`}>
                <span>Agosto 2026</span>
                <strong>$850.00</strong>

                {pagoRealizado ? (
                  <small>✓ Pagado</small>
                ) : (
                  <small className="pendiente">Pendiente</small>
                )}
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
              <strong>{pagoRealizado ? "$0.00" : "$850.00"}</strong>
            </div>
          </section>
        )}

        {vista === "pagos" && (
  <section className="pagina">
    <span className="etiqueta">P-03 · SPRINT 2</span>

    <h2>Gestión de pagos</h2>

    <p>
      Consulta tus pagos pendientes y registra el pago de tu cuota
      de mantenimiento.
    </p>

    <div className="pago-card">
      <h3>Cuota de mantenimiento</h3>

      <div className="pago-info">

        <div className="pago-dato">
          <span>Periodo</span>
          <strong>Agosto 2026</strong>
        </div>

        <div className="pago-dato">
          <span>Importe</span>
          <strong>$850.00</strong>
        </div>

        <div className="pago-dato">
          <span>Fecha límite</span>
          <strong>10 de septiembre de 2026</strong>
        </div>

        <div className="pago-dato">
          <span>Estado</span>
          <strong
            className={
              pagoRealizado
                ? "estado-pagado"
                : "estado-pendiente"
            }
          >
            {pagoRealizado ? "✓ Pagado" : "● Pendiente"}
          </strong>
        </div>

      </div>

      {!pagoRealizado ? (
        <div>
          <button
            className="boton-pagar"
            onClick={realizarPago}
          >
            Registrar pago de $850.00
          </button>
        </div>
      ) : (
        <div className="pago-exitoso">
          <div className="check">✓</div>

          <h3>Pago registrado</h3>

          <p>
            La cuota de agosto de 2026 se registró correctamente.
          </p>

          <span className="cuenta-corriente">
            Cuenta al corriente
          </span>
        </div>
      )}
    </div>

    <div className="historial-pagos">
      <h3>Historial de pagos</h3>

      <div className="historial-fila">
        <span>Julio 2026</span>
        <span>$850.00</span>
        <small>Pagado</small>
      </div>

      <div className="historial-fila">
        <span>Junio 2026</span>
        <span>$850.00</span>
        <small>Pagado</small>
      </div>

      <div className="historial-fila">
        <span>Mayo 2026</span>
        <span>$850.00</span>
        <small>Pagado</small>
      </div>
    </div>
  </section>
)}

        {vista === "avisos" && (
          <section className="pagina">
            <span className="etiqueta">P-04 · SPRINT 2</span>

            <h2>Avisos y notificaciones</h2>

            <p>
              Consulta información importante publicada para los residentes
              de Los Robles.
            </p>

            <div className="aviso aviso-importante">
              <div className="aviso-encabezado">
                <span className="tipo-aviso">IMPORTANTE</span>
                <small>30 de septiembre de 2026</small>
              </div>

              <h3>Asamblea vecinal</h3>

              <p>
                Se invita a todos los residentes a la próxima asamblea de
                la comunidad para revisar temas de mantenimiento y seguridad.
              </p>
            </div>

            <div className="aviso">
              <div className="aviso-encabezado">
                <span className="tipo-aviso">MANTENIMIENTO</span>
                <small>28 de septiembre de 2026</small>
              </div>

              <h3>Mantenimiento de áreas comunes</h3>

              <p>
                El próximo fin de semana se realizarán trabajos de
                mantenimiento en jardines y áreas comunes.
              </p>
            </div>

            <div className="aviso">
              <div className="aviso-encabezado">
                <span className="tipo-aviso">SEGURIDAD</span>
                <small>25 de septiembre de 2026</small>
              </div>

              <h3>Actualización de acceso residencial</h3>

              <p>
                Se recuerda a los residentes mantener actualizados los datos
                de sus vehículos para facilitar el acceso al residencial.
              </p>
            </div>
          </section>
        )}

        {vista === "perfil" && (
          <section className="pagina">
            <span className="etiqueta">P-01</span>

            <h2>Mi perfil</h2>

            <div className="perfil">
              <div className="avatar">R</div>

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
        <p>© 2026 Residencial Los Robles</p>
        <p>Proyecto académico · Scrum Sprint 1 y Sprint 2</p>
      </footer>
    </div>
  );
}

export default App;