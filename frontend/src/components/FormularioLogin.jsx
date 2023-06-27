const FormularioLogin = () => {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Tu Email"
          defaultValue="correo@correo.com"
        >          
        </input>
      </div>
      <div className="mb-3">
        <label
          htmlFor="password"
          className="form-label"
        >
          Password:
        </label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Tu Password"
          defaultValue="admin1234"
        />
      </div>
    </>
  )
}

export default FormularioLogin;