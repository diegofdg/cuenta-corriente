const FormularioMovimientos = () => {
  return (
    <>
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
        />
      </div>
    </>
  )
}

export default FormularioMovimientos;