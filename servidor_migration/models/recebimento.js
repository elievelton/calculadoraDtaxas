'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recebimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recebimento.belongsTo(models.Plano, {foreignKey: 'idRecebimento'})
    }
  }
  Recebimento.init({
    qtd_dias: DataTypes.STRING,
    fator_taxa: DataTypes.DOUBLE,
    debito: DataTypes.DOUBLE,
    credito: DataTypes.DOUBLE,
    cre_2x: DataTypes.DOUBLE,
    cre_3x: DataTypes.DOUBLE,
    cre_4x: DataTypes.DOUBLE,
    cre_5x: DataTypes.DOUBLE,
    cre_6x: DataTypes.DOUBLE,
    cre_7x: DataTypes.DOUBLE,
    cre_8x: DataTypes.DOUBLE,
    cre_9x: DataTypes.DOUBLE,
    cre_10x: DataTypes.DOUBLE,
    cre_11x: DataTypes.DOUBLE,
    cre_12x: DataTypes.DOUBLE,

  }, {
    sequelize,
    modelName: 'Recebimento',
  });
  return Recebimento;
};