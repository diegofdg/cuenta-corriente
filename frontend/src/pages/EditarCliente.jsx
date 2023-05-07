import { useState, useEffect } from "react";
import { Form, useLoaderData, useActionData, redirect } from 'react-router-dom';
import Formulario from "../components/FormularioClientes";
import { obtenerCliente, editarCliente } from "../data/Clientes";
import Error from '../components/Error';

export function loader({params}) {
  const { clienteId } = params;
  const cliente = obtenerCliente(clienteId);
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  console.log(datos)

  // Validación
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await editarCliente(params.clienteId, datos);
  console.log(datos)
  return redirect('/');  
}

const EditarCliente = () => {
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      {errores?.length ? <Error>{errores}</Error> : ''}
      <Form
        method="POST"
      >
        <Formulario
          cliente={cliente}
        />
        <input
          type="submit"
          value="Guardar Cambios"
        />
      </Form>
    </>
  )
}

export default EditarCliente;