import Cors from 'cors';
import dotenv from 'dotenv';
import Express from "express";
import { conectarBD } from './db/db.js'
import rutasProducto from './views/productos/routes.js';
import rutasUsuario from './views/usuarios/routes.js';

dotenv.config({path:'./.env'});

const app = Express();

app.use(Express.json());
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);

const main = () => {
   return app.listen(process.env.PORT, () => {
      console.log(`Esuchando puerto ${process.env.PORT}`);
   });
};

conectarBD(main);