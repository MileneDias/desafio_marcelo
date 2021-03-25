import Sequelize, { Model } from 'sequelize';
import Produto from './Produto';

class Categoria extends Model {
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
            tableName: 'categoria'
        });


        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Produto,{
            foreignKey: 'produto_id',
            schema: 'loja',
        });

        Categoria.hasMany(Produto, {
            foreignKey: 'produto_id',
            schema: 'loja',
        });
    }

}

export default Categoria;