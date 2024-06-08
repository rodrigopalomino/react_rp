import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ModalEditarCliente = ({ cliente }) => {
  const [categorias, setCategorias] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: cliente?.nombre || "",
    apellido_paterno: cliente?.apellido_paterno || "",
    apellido_materno: cliente?.apellido_materno || "",
    edad: cliente?.edad || "",
    telefono: cliente?.telefono || "",
    email: cliente?.email || "",
    estado: cliente?.estado || "",
    categoria: cliente?.categoria || "",
  });

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categoria/cliente`);
        const categoriasData = await response.json();
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategorias();
  }, [cliente]);

  useEffect(() => {
    setFormValues({
      nombre: cliente?.nombre || "",
      apellido_paterno: cliente?.apellido_paterno || "",
      apellido_materno: cliente?.apellido_materno || "",
      edad: cliente?.edad || "",
      telefono: cliente?.telefono || "",
      email: cliente?.email || "",
      estado: cliente?.estado || "activo",
      categoria_id: cliente?.categoria_id || "",
    });
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const clickEditar = async () => {
    const updateCliente = {
      codigo_cliente: cliente.codigo_cliente,
      ...formValues,
    };

    try {
      const response = await fetch(`http://localhost:3000/cliente/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCliente),
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
      {cliente && (
        <>
          <div
            className="modal fade"
            id="modalEditarCliente"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Editar Cliente
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form autoComplete="">
                    {/* nombre */}
                    <div className="row mb-2">
                      <label htmlFor="nombre" className="col-3 col-form-label">
                        Nombre:
                      </label>
                      <div className="col-9">
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          className="form-control"
                          value={formValues.nombre}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* apellido paterno */}
                    <div className="row d-flex align-items-center">
                      <label
                        htmlFor="apellido_paterno"
                        className="col-3 col-form-label"
                      >
                        Apellido Paterno:
                      </label>
                      <div className="col-9">
                        <input
                          id="apellido_paterno"
                          name="apellido_paterno"
                          type="text"
                          className="form-control"
                          value={formValues.apellido_paterno}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* apellido materno */}
                    <div className="row mb-2 d-flex align-items-center">
                      <label
                        htmlFor="apellido_materno"
                        className="col-3 col-form-label"
                      >
                        Apellido Materno:
                      </label>
                      <div className="col-9">
                        <input
                          id="apellido_materno"
                          name="apellido_materno"
                          type="text"
                          className="form-control"
                          value={formValues.apellido_materno}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Edad */}
                    <div className="row mb-2">
                      <label htmlFor="edad" className="col-3 col-form-label">
                        Edad :
                      </label>
                      <div className="col-2">
                        <input
                          id="edad"
                          name="edad"
                          type="text"
                          className="form-control"
                          value={formValues.edad}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Telefono */}
                    <div className="row mb-2">
                      <label
                        htmlFor="telefono"
                        className="col-3 col-form-label"
                      >
                        Telefono:
                      </label>
                      <div className="col-9">
                        <input
                          id="telefono"
                          name="telefono"
                          type="text"
                          className="form-control"
                          value={formValues.telefono}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="row mb-2">
                      <label htmlFor="email" className="col-3 col-form-label">
                        Email :
                      </label>
                      <div className="col-9">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Estado */}
                    <div className="row mb-2">
                      <label htmlFor="estado" className="col-3 col-form-label">
                        Estado:
                      </label>
                      <div className="col-4">
                        <select
                          name="estado"
                          id="estado"
                          className="form-select"
                          value={formValues.estado}
                          onChange={handleChange}
                        >
                          <option value="activo">Activo</option>
                          <option value="desactivo">Desactivo</option>
                        </select>
                      </div>
                    </div>

                    {/* Categoria */}
                    <div className="row">
                      <label
                        htmlFor="categoria"
                        className="col-3 col-form-label"
                      >
                        Categoria:
                      </label>
                      <div className="col-8">
                        <select
                          name="categoria"
                          id="categoria"
                          className="form-select"
                          value={formValues.categoria_id}
                          onChange={handleChange}
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
                    onClick={clickEditar}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

ModalEditarCliente.propTypes = {
  cliente: PropTypes.object.isRequired, // Define the type and if it's required
};
