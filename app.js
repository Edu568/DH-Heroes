const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(‘Public’));

app.listen(3030, () => console.log('levatando servidor en el puerto 3030'));

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/lovelace.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
})

app.get('/hopper.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.html'));
})

app.get('/hamilton.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
})

app.get('/clarke.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'));
})

app.get('/berners-lee.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'));
})

app.get('/babbage.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
})

app.get('/404', (req, res) => {
    return res.sendFile('Error pagina no encontrada') 
})