import Cliente from "../models/Cliente.js";

export const obtenerClientes = async(req,res,next) => {
  try{
    const result = await Cliente.findAll();
    if(result != ''){ 
      return res.status(200).json({'Clientes registrados': result});
    } else {
      return res.status(413).json({
       'Error': 'No existen clientes registrados' 
      });
    }
  }
  catch(error){
    next(error);
  }
}