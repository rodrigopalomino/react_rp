import Plantilla from "./plantilla";

const Cabecera_venta = () => {
  return (
    <>
      <Plantilla>
        <section className="content text-center">
          <div className="container-fluid">
            <h3 className="card-title mt-3 mb-2">Ventas</h3>
            <button
              type="button"
              class="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#add"
              id="addModal"
            >
              Añadir
            </button>
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Cliente</th>
                  <th>Recibo</th>
                  <th>Metodo de Venta</th>
                  <th>Metodo de Pago</th>
                  <th>Tipo Venta</th>
                  <th>Cantidad Total</th>
                  <th>Precio Bruto</th>
                  <th>IGV</th>
                  <th>Precio Neto</th>
                  <th>Fecha de Venta</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VF100</td>
                  <td>Lynx</td>
                  <td>Boleta</td>
                  <td>Normal</td>
                  <td>Efectivo</td>
                  <td>Presencial</td>
                  <td>10</td>
                  <td>100</td>
                  <td>20</td>
                  <td>120</td>
                  <td>12/12/12</td>
                  <td>
                    <button className="btn btn-primary">Editar</button>
                    <button className="btn btn-warning">Imprimir</button>
                    <button className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div
          className="modal fade"
          id="add"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Venta
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="" method="POST">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col border">
                        <div className="row">
                          <div className="col">
                            <input type="text" placeholder="Codigo" />
                          </div>
                          <div className="col">
                            <select name="" id="">
                              <option value="">--Tipo de Recibo--</option>
                              <option value="1">Boleta</option>
                              <option value="2">Factura</option>
                            </select>
                          </div>
                          <div className="col">
                            <select name="" id="">
                              <option value="">--Metodo de Venta--</option>
                              <option value="1">Normal</option>
                              <option value="2">Especial</option>
                              <option value="3">Promocion</option>
                            </select>
                          </div>
                          <div className="col">
                            <select name="" id="">
                              <option value="">--Metodo de Pago--</option>
                              <option value="1">Efectivo</option>
                              <option value="2">Tarjeta</option>
                              <option value="3">Otros</option>
                            </select>
                          </div>
                          <div className="col">
                            <select name="" id="">
                              <option value="">--Tipo de Venta--</option>
                              <option value="1">Presencial</option>
                              <option value="2">Virtual</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col border">
                        <div className="row">
                          <div className="col">
                            <input type="text" placeholder="Cliente"/>
                          </div>
                          <div className="col">
                            <input type="text" placeholder="Cantidad" readOnly/>
                          </div>
                          <div className="col">
                            <input type="text" placeholder="Precio Bruto" readOnly/>
                          </div>
                          <div className="col">
                            <input type="text" placeholder="IGV" readOnly/>
                          </div>
                          <div className="col">
                            <input type="text" placeholder="Precio Neto" readOnly/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <input type="text" placeholder="Producto"/>
                        <input type="text" placeholder="cantidad"/>
                        <input type="text" readOnly/>
                        <input type="text" placeholder="precio_total"/>
                      </div>
                    </div>


                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Plantilla>
    </>
  );
};

export default Cabecera_venta;
