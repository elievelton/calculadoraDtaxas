const db = require("../db");
var Empresa = require("./Empresa");
const Plano = db.sequelize.define("plano", {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  nome_qtd_dias: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  pessoa: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  fatordetaxa: {
    type: db.Sequelize.DECIMAL,
    allowNull: true,
  },
  debito: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito: {
    type: db.Sequelize.DECIMAL,
    allowNull: true,
  },
  Credito2x: {
    type: db.Sequelize.DECIMAL,
    allowNull: true,
  },
  Credito3x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito4x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito5x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito6x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito7x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito8x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito9x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito10x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito11x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  Credito12x: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
});

Plano.sync();
Empresa.hasMany(Plano,{
  constraint: true,
  foreignKey: "EmpresaId",
});
Plano.belongsTo(Empresa);
module.exports = Plano;
