const express = require('express');
const multer = require('multer');
const pool = require('../database');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

// Subir archivo Excel para actualizar existencias
router.post('/actualizar-stock', upload.single('file'), async (req, res) => {
    try {
      const { file } = req;
      // Lógica para procesar el archivo Excel
      res.json({ message: 'Archivo procesado correctamente', file });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});
  
module.exports = router;