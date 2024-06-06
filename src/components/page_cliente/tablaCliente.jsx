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

  const clickEliminarCliente = async (cliente_id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/cliente/delete/${cliente_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("Respuesta de la API:", data);
      window.location.reload();
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <>
      <table id="example1" className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
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
              <tr key={cliente.cliente_id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
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
                      console.log(cliente.cliente_id);
                      console.log(cliente);
                      setCliente(cliente);
                    }}
                  >
                    Editar
                  </button>

                  <button className="btn btn-warning mx-2">Imprimir</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => clickEliminarCliente(cliente.cliente_id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {cliente && <ModalEditarCliente cliente={cliente}></ModalEditarCliente>}
    </>
  );
};
