const db = require('../db');
const Plano = db.sequelize.define('plano',{
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
        

    }
});

Plano.sync();
module.exports = Plano;