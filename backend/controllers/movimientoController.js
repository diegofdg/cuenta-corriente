import Movimiento from "../models/Movimiento.js";

export const obtenerMovimientos = async(req,res,next) => {
  try{
    const result = await Movimiento.findAll();
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