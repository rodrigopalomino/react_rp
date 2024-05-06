export const TablaUsuario = () => {
  return (
    <>
      <table id="example1" className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Tipo de Cliente</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre 1</td>
            <td>25</td>
            <td>Direccion del usuario 1</td>
            <td>123 456 789</td>
            <td>usuario1@gmail.com</td>
            <td>Recurrente</td>
            <td>
              <span style={{ color: "green" }}>✔ Activo</span>
            </td>
            <td>
              <button className="btn btn-primary me-2">Editar</button>
              <button className="btn btn-warning me-2">Imprimir</button>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
