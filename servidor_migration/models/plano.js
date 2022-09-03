"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plano.belongsTo(models.Empresa, { foreignKey: "idPlano" });
      Plano.hasMany(models.Recebimento, { foreignKey: "idRecebimento" });
    }
  }
  Plano.init(
    {
      nome: DataTypes.STRING,
      idRecebimento: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Plano",
    }
  );
  return Plano;
};
