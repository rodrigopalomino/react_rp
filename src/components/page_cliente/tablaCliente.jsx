import { useState, useEffect } from "react";
import { ModalEditarCliente } from "./modalEditarCliente";

export const TablaUsuario = () => {
  const [clientes, setClientes] = useState(null);
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cliente`);
        const clientesData = await response.json();
        setClientes(clientesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClientes();
  }, []);

  // codigo 6 caracteres iniciales de nombre iniciales de apellidos ropc01

  // basico
  // regular
  // frucuente

  return (
    <>
      <table id="example1" className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes &&
            clientes.map((cliente) => (
              <tr key={cliente.codigo_cliente}>
                <td>{cliente.codigo_cliente}</td>
                <td>{cliente.nombre}</td>
                <td>
                  {cliente.apellido_paterno} {cliente.apellido_materno}
                </td>
                <td>{cliente.edad}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.email}</td>
                <td>
                  <span>{cliente.estado === "activo" ? "✔" : "❌"}</span>
                  <span
                    style={{
                      color: cliente.estado === "activo" ? "green" : "red",
                    }}
                  >
                    {cliente.estado}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditarCliente"
                    onClick={() => {
                      setCliente(cliente);
                    }}
                  >
                    Editar
                  </button>

                  <button className="btn btn-warning mx-2">Reportes</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {cliente && <ModalEditarCliente cliente={cliente}></ModalEditarCliente>}
    </>
  );
};
