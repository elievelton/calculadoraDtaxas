const db = require('../db');
const Plano = require('./Plano');
const Empresa = db.sequelize.define('empresa',{
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
        

    },
    notaReclameAqui:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    melhoremque:{
        type: db.Sequelize.STRING,
        allowNull: false,
        

    }
});

Empresa.sync();
Empresa.belongsTo(Plano,{
    constraint : true,
    foreiKey: 'idPlano',
})
module.exports = Empresa;