import Movimiento from "../models/Movimiento.js";
import Cliente from "../models/Cliente.js";

export const obtenerMovimientos = async(req,res,next) => {
  try{
    const result = await Movimiento.findAll(
      {
        where: {
          estado: 1,
        },
        attributes: ['id', 'fecha', 'detalle', 'importe'],
        include: [
          {
            attributes: ['nombre'],
            model: Cliente,
            as: 'cliente',
          },
        ],
        order: [
          ['fecha', 'asc']
        ]
      }
    );
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

/* export const obtenerMovimientos = async(req,res,next) => {
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
} */