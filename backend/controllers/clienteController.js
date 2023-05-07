import Cliente from "../models/Cliente.js";

export const obtenerClientes = async(req,res,next) => {
  try{
    const result = await Cliente.findAll({
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
    const result = await Cliente.create({
      nombre, cuil, telefono, email, condicion
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
  console.log(clienteId);
  const { nombre, cuil, telefono, email, condicion } = req.body;
  try{
    if(!nombre) {
      return res.status(400).json([]);
    };
    const result = await Cliente.update({
      nombre, cuil, telefono, email, condicion
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