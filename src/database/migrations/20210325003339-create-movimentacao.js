'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movimentacao', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    estoque: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    motivo_devolucao: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    deposito_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'deposito',
            key: 'id'
        },
    },

},{

    schema: 'loja',
    tableName: 'movimentacao'
});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      schema: 'loja',
      tableName: 'movimentacao',
    });
  }
};