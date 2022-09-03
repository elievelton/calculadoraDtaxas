const express = require('express');
const cokkieParser = require('cokkie-parser');
const cors = require('cors');
const path = require('path');

const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(cokkieParser());
app.use(express.json());
app.use(routes);


app.listen(3010,function() {
    console.log("Server listening on http://localhost:3003");
})
