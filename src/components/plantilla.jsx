import React from 'react';

const Plantilla = ({children}) => {
  return (
    <>
      <div className="d-flex">
        <div
          className="d-flex flex-column flex-shrink-0 bg-body-tertiary vh-100"
          style={{ width: '4.5rem' }}
        >
          <a
            href="/"
            className="d-block p-3 link-body-emphasis text-decoration-none"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Icon-only"
          >
            <div className="text-center fs-3">
              <i className="fa-solid fa-shield-cat" aria-label="Gato" role="img"></i>
            </div>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item fs-6">
              <a
                href="/"
                className="nav-link active py-3 border-bottom rounded-0"
                aria-current="page"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Home"
                data-bs-original-title="Home"
              >
                <i className="fa-solid fa-house"></i>
              </a>
            </li>
            <li>
              <a
                href="/add/1"
                className="nav-link py-3 border-bottom rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Dashboard"
                data-bs-original-title="Dashboard"
              >
                <i className="fa-solid fa-cash-register"></i>
              </a>
            </li>
            <li>
              <a
                href="/add/2"
                className="nav-link py-3 border-bottom rounded-0"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Orders"
                data-bs-original-title="Orders"
              >
                <i className="fa-solid fa-book"></i>
              </a>
            </li>
          </ul>
          <div className="dropdown border-top">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="24"
                height="24"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li><a className="dropdown-item" href="#">Correo</a></li>
              <li><a className="dropdown-item" href="#">Configuracion</a></li>
              <li><a className="dropdown-item" href="#">Perfil</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      <div className='content-wrapper'>
        {children}
      </div>
      </div>
    </>
  );
};

export default Plantilla