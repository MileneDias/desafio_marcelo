import Sequelize, { Model } from 'sequelize';
import Movimentacao from './Movimentacao';
import Categoria from './Categoria';
import Deposito from './Deposito';

class Produto extends Model {
    static init(sequelize) {
        super.init({
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
                type: Sequelize.STRING(100),
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
            deposito_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'deposito',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        },{
            sequelize,
            schema: 'loja',
            tableName: 'produto'
        });


        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Categoria,{
            foreignKey: 'categoria_id',
            schema: 'loja',
        });

        Categoria.hasMany(Produto, {
            foreignKey: 'categoria_id',
            schema: 'loja',
        });
    }
    static associate(sequelize) {
        this.belongsTo(Movimentacao,{
            foreignKey: 'movimentacao_id',
            schema: 'loja',
        });

        Movimentacao.hasMany(Produto, {
            foreignKey: 'movimentacao_id',
            schema: 'loja',
        });
    }

    static associate(sequelize) {
        this.belongsTo(Deposito,{
            foreignKey: 'deposito_id',
            schema: 'loja',
        });

        Deposito.hasMany(Produto, {
            foreignKey: 'deposito_id',
            schema: 'loja',
        });
    }
}

export default Produto;