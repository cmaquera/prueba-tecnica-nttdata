const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar middleware
app.use(express.json());
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let listaPersonas = [];

// Ruta para obtener la lista de usuarios
app.get('/api/personas', async (req, res) => {

    if (listaPersonas.length > 0) {
        res.json(listaPersonas);
    } else {
        const lista = await fetch('https://randomuser.me/api/?results=10');

        const personas = await lista.json();

        listaPersonas = personas.results;

        res.json(listaPersonas);
    }

});



// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
