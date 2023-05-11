import Cliente from "../models/Cliente.js";
import Sequelize from 'sequelize';

export const contarClientes = async(req,res,next) => {
  try{
    const result = await Cliente.findAll({
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('nombre')), 'cantidad_clientes']],
      where: {
          estado: 1
      }
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const obtenerClientes = async(req,res,next) => {
  try{
    const result = await Cliente.findAll({
      where: {
          estado: 1
      },
      order: [
        ['nombre', 'asc']
      ]
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const obtenerClientesPorPagina = async(req,res,next) => {
  const { pagina } = req.params;
  const offset = (pagina - 1) * 5;
  const limit = 5;
  try{
    const result = await Cliente.findAll({
      limit,
      offset,
      where: {
          estado: 1
      }
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const agregarCliente = async(req,res,next) => {
  const { nombre, cuil, telefono, email, condicion } = req.body;
  try{
    if(!nombre) {
      return res.status(400).json([]);
    };
    const nombreMayusculas = nombre.toUpperCase();
    const result = await Cliente.create({
      nombreMayusculas, cuil, telefono, email, condicion
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const obtenerCliente = async(req,res,next) => {
  const { clienteId } = req.params;

  try{
    const result = await Cliente.findByPk(clienteId);
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const editarCliente = async(req,res,next) => {
  const { clienteId } = req.params;
  const { nombre, cuil, telefono, email, condicion } = req.body;
  try{
    if(!nombre) {
      return res.status(400).json([]);
    };
    const nombreMayusculas = nombre.toUpperCase();
    const result = await Cliente.update({
      nombreMayusculas, cuil, telefono, email, condicion
    },{
      where: {
        id: clienteId
      }
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const eliminarCliente = async(req,res,next) => {
  const { clienteId } = req.params;
  console.log(clienteId);
  try{
    const result = await Cliente.update({
      estado: 0
    },{
      where: {
        id: clienteId
      }
    });
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}