const FormularioLogin = () => {
  return (
    <>
      <div>
        <label
          htmlFor="email"
        >
          Email:
        </label>
        <input 
          id="email"
          type="email"
          placeholder="Tu Email"
          name="email"
          defaultValue="correo@correo.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
        >
          Password:
        </label>
        <input 
          id="password"
          type="password"
          placeholder="Tu Password"
          name="password"
          defaultValue="admin1234"
        />
      </div>
    </>
  )
}

export default FormularioLogin;