const db = require('../db');
const Taxa = db.sequelize.define('taxa',{
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
    debito:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito2x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito3x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito4x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito5x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito6x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito7x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito8x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito9x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito10x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito11x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    },
    Credito12x:{
        type: db.Sequelize.DECIMAL,
        allowNull: false,
        

    }
});

Taxa.sync();
module.exports = Taxa;