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
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const obtenerMovimientosCliente = async(req,res,next) => {
  const { clienteId } = req.params;

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
            where: {
              id: clienteId
            },
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
      return res.status(200).json([]);
    }
  }
  catch(error){
    next(error);
  }
}

export const agregarMovimiento = async(req,res,next) => {
  const { clienteId } = req.params;
  const { fecha, detalle, importe } = req.body;
  try{
    if(!fecha || !clienteId || !detalle || !importe) {
      return res.status(400).json([]);
    };
    const result = await Movimiento.create({
      fecha, clienteId, detalle, importe
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