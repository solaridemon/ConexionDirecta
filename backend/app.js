const express = require('express');
const mongoose = require('mongoose');
const productoRoutes = require('./routes/productos'); // Importar las rutas de usuarios
const dotenv = require('dotenv'); // Importar dotenv para manejar variables de entorno
const path = require('path');
const app = express();

// Cargar variables de entorno desde .env
dotenv.config();

// Middleware para parsear JSON
app.use(express.json()); // Para parsear application/json
app.use(express.urlencoded({ extended: true })); // Para parsear form data
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend/public/')));

// Conectar a MongoDB usando MONGO_URI desde .env
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conexión a MongoDB establecida'))
.catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/productos', productoRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Algo salió mal en el servidor' });
});
