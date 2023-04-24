import Cliente from "../models/Cliente.js";

export const obtenerClientes = async(req,res,next) => {
  try{
    const result = await Cliente.findAll();
    if(result != ''){ 
      return res.status(200).json(result);
    } else {
      return res.status(413).json([]);
    }
  }
  catch(error){
    next(error);
  }
}