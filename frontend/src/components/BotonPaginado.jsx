const BotonPaginado = ({tipo, pagina}) => {
  return (
    <a href={`/clientes/pagina/${pagina}`}>
       <button type="button">
          {`Página ${tipo}`}
      </button>
    </a>
  )
}

export default BotonPaginado;