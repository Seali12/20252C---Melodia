const express = require('express'); //importar exprexx
const app = express(); //creo la ap

//creo ruta y envio el html
app.get('/', (req, res) => {
    res.send('<h1>Hola mundo </h1>');
});

const port = 5100;
app.listen(port, () => {
    console.log(`EL SERVE TA CORRIENDO ${port}`);
});

app.get('/oyentes', (req, res) => {
    res.send('pagina de oyentes');
});

app.get('/artista', (req, res) => {
    res.send('pagina de artista');
});

app.get('/buscador', (req, res) => {
    res.send('Loop de busqueda');
});

