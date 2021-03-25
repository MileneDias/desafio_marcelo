import Sequelize, { Model } from 'sequelize';
import Deposito from './Deposito';
import Produto from './Produto';

class Movimentacao extends Model {
    static init(sequelize) {
        super.init({
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
            produto_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'produto',
                    key: 'id'
                },
            },

        },{
            sequelize,
            schema: 'loja',
            tableName: 'movimentacao'
        });


        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Produto, {
            foreignKey: 'produto_id',
            schema: 'loja',
        });

        Produto.hasMany(Movimentacao, {
            foreignKey: 'produto_id',
            schema: 'loja',
        });
    }

    static associate(sequelize) {
        this.belongsTo(Deposito,{
            foreignKey: 'deposito_id',
            schema: 'loja',
        });

        Deposito.hasMany(Movimentacao, {
            foreignKey: 'deposito_id',
            schema: 'loja',
        });
    }

}

export default Movimentacao;