const express = require('express');
const app = express();
const port = 3000;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Sirve archivos estáticos (por ejemplo, imágenes, CSS, JS)
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');  // Esto renderiza la vista "index.ejs" dentro de la carpeta "views"
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
