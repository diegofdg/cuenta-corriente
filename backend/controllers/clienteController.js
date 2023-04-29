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
  console.log(req.body)
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