const FormularioMovimientos = ({movimiento}) => {
  console.log(movimiento.clienteId)
  return (
    <>
      <div className="oculto">
        <label
          htmlFor="clienteId"
        >
          Cliente Id:
        </label>
        <input 
          id="clienteId"
          type="number"
          name="clienteId"
          defaultValue={movimiento?.clienteId}
        />
      </div>
      <div>
        <label
          htmlFor="fecha"
        >
          Fecha:
        </label>
        <input 
          id="fecha"
          type="date"
          name="fecha"
          defaultValue={movimiento?.fecha}
        />
      </div>
      
      <div>
        <label
          htmlFor="detalle"
        >
          Detalle:
        </label>
        <input 
          id="detalle"
          type="text"
          placeholder="Detalle del movimiento"
          name="detalle"
          defaultValue={movimiento?.detalle}
        />
      </div>

      <div>
        <label
          htmlFor="importe"
        >
          Importe:
        </label>
        <input 
          id="importe"
          type="number"
          name="importe"
          defaultValue={movimiento?.importe}
        />
      </div>
    </>
  )
}

export default FormularioMovimientos;