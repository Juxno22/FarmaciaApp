const express = require('express');
const pool = require('../database');
const router = express.Router();

// Obtener medicamentos
router.get('/medicamentos', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM medicamentos');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Realizar pedido
router.post('/pedidos', async (req, res) => {
    try {
      const { medicamentos, datosUsuario } = req.body;
      // Lógica para guardar el pedido
      res.json({ message: 'Pedido realizado con éxito' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

module.exports = router;
