import express from "express";
import { obtenerClientes } from "../controllers/clienteController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/clientes',obtenerClientes);

export default router;