'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'categoria',
            key: 'id'
        },
    },
    movimentacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'movimentacao',
                key: 'id'
        },
    },
    
},{
    schema: 'loja',
    tableName: 'produto'
});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      schema: 'loja',
      tableName: 'produto',
    });
  }
};