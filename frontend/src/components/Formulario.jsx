const Formulario = () => {

  const CONDICIONES = [
    { id: 1, condicion: 'Monotributista' },
    { id: 2, condicion: 'Consumidor Final' },
    { id: 3, condicion: 'Responsable Inscripto' },
    { id: 4, condicion: 'Responsable No Inscripto' },
    { id: 5, condicion: 'Exento' },
  ];

  return (
    <>
      <div>
        <label
          htmlFor="nombre"
        >
          Nombre:
        </label>
        <input 
          id="nombre"
          type="text"
          placeholder="Nombre del Cliente"
          name="nombre"
        />
      </div>
      <div>
        <label
          htmlFor="cuil"
        >
          CUIL:
        </label>
        <input 
          id="cuil"
          type="text"
          placeholder="CUIL del Cliente"
          name="cuil"
        />
      </div>

      <div>
        <label
          htmlFor="telefono"
        >
          Teléfono:
        </label>
        <input 
          id="telefono"
          type="tel"
          placeholder="Teléfono del Cliente"
          name="telefono"
        />
      </div>

      <div>
        <label
          htmlFor="email"
        >
          E-mail:
        </label>
        <input 
          id="email"
          type="email"
          placeholder="Email del Cliente"
          name="email"
        />
      </div>

      <div>
        <label for="condicion">
          Situación Fiscal
        </label>
        <select
          id="condicion"
          name="condicion"
        >
          <option value="">-- Selecciona Situación --</option>
          {CONDICIONES.map(item => (
            <option
              key={item.id}
              value={item.condicion}
            >
              {item.condicion}
            </option>
          ))}

        </select>
      </div>
    </>
  )
}

export default Formulario;