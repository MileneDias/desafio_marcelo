import Sequelize from 'sequelize';
import Categoria from '../app/models/Categoria';
import Deposito from '../app/models/Deposito';
import Movimentacao from '../app/models/Movimentacao';
import Produto from '../app/models/Produto';
import Saldo from '../app/models/Saldo';
import config from '../config/database';

const models = [
    Categoria,
    Deposito,
    Movimentacao,
    Produto,
    Saldo
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

export default new Database();
