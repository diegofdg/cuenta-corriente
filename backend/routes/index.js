import express from "express";
import { obtenerClientes } from "../controllers/clienteController.js";
import { obtenerMovimientos, obtenerMovimientosCliente } from "../controllers/movimientoController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/api/clientes',obtenerClientes);
router.get('/api/movimientos',obtenerMovimientos);
router.get('/api/movimientos/:id',obtenerMovimientosCliente);

export default router;