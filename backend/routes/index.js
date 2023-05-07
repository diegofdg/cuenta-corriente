import express from "express";
import { obtenerClientes, obtenerCliente, agregarCliente, editarCliente, eliminarCliente } from "../controllers/clienteController.js";
import { obtenerMovimientos, obtenerMovimientosCliente, agregarMovimiento } from "../controllers/movimientoController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/api/clientes',obtenerClientes);
router.post('/api/clientes',agregarCliente);
router.get('/api/clientes/:clienteId',obtenerCliente);
router.post('/api/clientes/:clienteId',editarCliente);
router.delete('/api/clientes/:clienteId',eliminarCliente);
router.get('/api/movimientos',obtenerMovimientos);
router.get('/api/movimientos/:clienteId',obtenerMovimientosCliente);
router.post('/api/movimientos/:clienteId',agregarMovimiento);

export default router;