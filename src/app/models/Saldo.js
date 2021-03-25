import Sequelize, { Model } from 'sequelize';
import Deposito from './Deposito';
import Produto from './Produto';


class Saldo extends Model {
    static init(sequelize) {
        super.init({
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
            sequelize,
            schema: 'loja',
            tableName: 'saldo'
        });


        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Produto,{
            foreignKey: 'produto_id',
            schema: 'loja',
        });

        Saldo.hasMany(Produto, {
            foreignKey: 'produto_id',
            schema: 'loja',
        });
    }
    static associate(sequelize) {
        this.belongsTo(Deposito,{
            foreignKey: 'deposito_id',
            schema: 'loja',
        });

        Deposito.hasMany(Saldo, {
            foreignKey: 'deposito_id',
            schema: 'loja',
        });
    }

}

export default Saldo;