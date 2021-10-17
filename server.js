import Cors from 'cors';
import dotenv from 'dotenv';
import Express from "express";
import { conectarBD } from './db/db.js'
import rutasProducto from './views/productos/routes.js';
import rutasUsuario from './views/usuarios/routes.js';
import rutasVenta from './views/ventas/routes.js';

dotenv.config({path:'./.env'});

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasUsuario);
app.use(rutasVenta);
app.use(rutasProducto);

const main = () => {
   return app.listen(process.env.PORT, () => {
      console.log(`Esuchando puerto ${process.env.PORT}`);
   });
};

conectarBD(main);