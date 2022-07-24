const express  = require("express")
const route    = express.Router()
const path     = require('path')
const basePath = path.join(__dirname, '../templates');

route.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

route.get('/exercicio', (req, res) => {
    res.sendFile(`${basePath}/index2.html`);
})


module.exports = route