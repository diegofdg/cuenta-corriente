import { useEffect, useState } from "react";

const Formulario = ({cliente}) => {

  const [ condicion, setCondicion ] = useState('');

  const CONDICIONES = [
    { id: 1, condicion: 'Monotributista' },
    { id: 2, condicion: 'Consumidor Final' },
    { id: 3, condicion: 'Responsable Inscripto' },
    { id: 4, condicion: 'Responsable No Inscripto' },
    { id: 5, condicion: 'Exento' },
  ];

  useEffect(()=>{
    setCondicion(cliente?.condicion);
  },[]);  

  const handleChangeCondicion = (dato)=> {    
    setCondicion(dato);
  }

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
          defaultValue={cliente?.nombre}
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
          defaultValue={cliente?.cuil}
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
          defaultValue={cliente?.telefono}
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
          defaultValue={cliente?.email}
        />
      </div>

      <div>
        <label htmlFor="condicion">
          Situación Fiscal
        </label>
        <select
          id="condicion"
          name="condicion"
          onChange={e => handleChangeCondicion(e.target.value)}
          value={condicion}

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