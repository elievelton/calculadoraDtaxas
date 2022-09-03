'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recebimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd_dias: {
        type: Sequelize.STRING
      },
      fator_taxa: {
        type: Sequelize.DOUBLE
      },
      debito: {
        type: Sequelize.DOUBLE
      },
      credito: {
        type: Sequelize.DOUBLE
      },
      cre_2x: {
        type: Sequelize.DOUBLE
      },
      cre_3x: {
        type: Sequelize.DOUBLE
      },
      cre_4x: {
        type: Sequelize.DOUBLE
      },
      cre_5x: {
        type: Sequelize.DOUBLE
      },
      cre_6x: {
        type: Sequelize.DOUBLE
      },
      cre_7x: {
        type: Sequelize.DOUBLE
      },
      cre_8x: {
        type: Sequelize.DOUBLE
      },
      cre_9x: {
        type: Sequelize.DOUBLE
      },
      cre_10x: {
        type: Sequelize.DOUBLE
      },
      cre_11x: {
        type: Sequelize.DOUBLE
      },
      cre_12x: {
        type: Sequelize.DOUBLE
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recebimentos');
  }
};