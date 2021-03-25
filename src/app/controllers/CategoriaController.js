import Categoria from '../models/Categoria';
import Produto from '../models/Produto';

//Olá!!!

class CategoriaController {
    async index(req, res) {
        const categorias = await Categoria.findAll({
            include: [
                {
                    model: Produto,
                }
            ]
        });

        return res.json(categorias);
    }
}

export default new CategoriaController();