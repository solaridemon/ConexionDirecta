const express = require('express');
const Producto = require('../models/Producto'); // Importar el modelo de Producto
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).send(producto);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;