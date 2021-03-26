import Categoria from '../models/Categoria';
import Produto from '../models/Produto';

//Boa noite

class CategoriaController {
    async index(req, res) {
        //sadsa
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