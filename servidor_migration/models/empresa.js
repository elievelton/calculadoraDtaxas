'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresa.hasMany(models.Plano,{foreignKey:"idPlano"})
      
    }
  }
  Empresa.init({
    nome: DataTypes.STRING,
    notaReclameAqui: DataTypes.DOUBLE,
    destaque: DataTypes.STRING,
    idPlano: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Empresa',
    
  });
  return Empresa;
};