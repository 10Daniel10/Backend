import Express from 'express';
import {
  queryAllProduct,
  crearProducto,
  editarProducto,
  eliminarProducto,
  consultarProducto,
} from '../../controllers/productos/controller.js';

const rutasProducto = Express.Router();

const genercCallback = (res) => (err, result) => {
  if (err) {
    console.log('error', err);
    res.status(500).json({ error: err });
  } else {
    res.json(result);
  }
};

rutasProducto.route('/productos').get((req, res) => {
  console.log('alguien hizo get en la ruta /Productos');
  queryAllProduct(genercCallback(res));
});

rutasProducto.route('/productos').post((req, res) => {
  crearProducto(req.body, genercCallback(res));
});

rutasProducto.route('/productos/:id').get((req, res) => {
  console.log('alguien hizo get en la ruta /Productos');
  consultarProducto(req.params.id, genercCallback(res));
});

rutasProducto.route('/productos/:id').patch((req, res) => {
  editarProducto(req.params.id, req.body, genercCallback(res));
});

rutasProducto.route('/productos/:id').delete((req, res) => {
  eliminarProducto(req.params.id, genercCallback(res));
});

export default rutasProducto;