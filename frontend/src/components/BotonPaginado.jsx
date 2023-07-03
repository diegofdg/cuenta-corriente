const BotonPaginado = ({tipo, pagina}) => {
  return (
    <a href={`/clientes/pagina/${pagina}`}>
      <button
        type="button"
        class="btn btn-primary"
      >
        {`Página ${tipo}`}
      </button>
    </a>
  )
}

export default BotonPaginado;