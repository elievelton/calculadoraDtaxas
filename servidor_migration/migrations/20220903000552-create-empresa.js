"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Empresas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      notaReclameAqui: {
        type: Sequelize.DOUBLE,
      },
      destaque: {
        type: Sequelize.STRING,
      },
      idPlano: {
        type: Sequelize.INTEGER,
        references: {
          model: "Empresas",
          key: "id",
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
   
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Empresas");
  },
};
