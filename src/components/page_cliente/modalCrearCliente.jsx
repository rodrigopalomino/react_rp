import { useEffect, useState } from "react";

export const ModalCreateCliente = () => {
  const [categorias, setCategorias] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch(`http://localhost:3000/categoria/cliente`);
      const categoriasData = await response.json();

      setCategorias(categoriasData);
    };
    fetchCategorias();
  }, []);

  const clickCrear = async () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const estado = document.getElementById("estado").value;
    const categoria_id = document.getElementById("categoria").value;

    const cliente = {
      nombre,
      apellido,
      edad,
      telefono,
      email,
      estado,
      categoria_id,
    };

    try {
      const response = await fetch(`http://localhost:3000/cliente/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });
      const data = await response.json();
      console.log("Respuesta de la API:", data);
      window.location.reload();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCreateCliente"
      >
        Añadir
      </button>

      <div className="modal fade" id="modalCreateCliente" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Crear Cliente
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form autoComplete="off">
                {/* nombre */}
                <div className="row mb-2">
                  <label htmlFor="nombre" className="col-2 col-form-label">
                    Nombre:
                  </label>
                  <div className="col-10">
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                </div>

                {/* apellido */}
                <div className="row mb-2">
                  <label htmlFor="apellido" className="col-2 col-form-label">
                    Apellido:
                  </label>
                  <div className="col-10">
                    <input
                      id="apellido"
                      name="apellido"
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                    />
                  </div>
                </div>

                {/* Edad */}
                <div className="row mb-2">
                  <label htmlFor="edad" className="col-2 col-form-label">
                    Edad :
                  </label>
                  <div className="col-2">
                    <input
                      id="edad"
                      name="edad"
                      type="text"
                      className="form-control"
                      placeholder="30"
                    />
                  </div>
                </div>

                {/* Telefono */}
                <div className="row mb-2">
                  <label htmlFor="telefono" className="col-2 col-form-label">
                    Telefono:
                  </label>
                  <div className="col-10">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      className="form-control"
                      placeholder="123456789"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="row mb-2">
                  <label htmlFor="email" className="col-2 col-form-label">
                    Email :
                  </label>
                  <div className="col-10">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="cliente@gmail.com"
                    />
                  </div>
                </div>

                {/* Estado */}
                <div className="row mb-2">
                  <label htmlFor="estado" className="col-2 col-form-label">
                    Estado:
                  </label>
                  <div className="col-4">
                    <select name="estado" id="estado" className="form-select">
                      <option value="activo">Activo</option>
                      <option value="desactivo">Desactivo</option>
                    </select>
                  </div>
                </div>

                {/* Categoria */}
                <div className="row">
                  <label htmlFor="categoria" className="col-2 col-form-label">
                    Categoria:
                  </label>
                  <div className="col-8">
                    <select
                      name="categoria"
                      id="categoria"
                      className="form-select"
                    >
                      {categorias &&
                        categorias.map((categoria) => (
                          <option
                            key={categoria.categoria_id}
                            value={categoria.categoria_id}
                          >
                            {categoria.categoria}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={clickCrear}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
