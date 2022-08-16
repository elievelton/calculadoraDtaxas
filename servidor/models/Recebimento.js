const db = require('../db');
const Recebimento = db.sequelize.define('recebimento',{
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

Recebimento.sync();
Recebimento.belongsTo(Taxas,{
    constraint : true,
    foreiKey: 'idtaxas',
})
module.exports = Recebimento;