const express = require('express');
const routes = express.Router();


routes.get('/',function (req, res,) {
    res.json({message:"Testando com sucesso o backend"})
});

module.exports = routes;