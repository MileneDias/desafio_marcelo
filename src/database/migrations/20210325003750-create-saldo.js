'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('saldo', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    estoque: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'produto',
            key: 'id'
        },
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
    tableName: 'saldo'
});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      schema: 'loja',
      tableName: 'saldo',
    });
  }
};