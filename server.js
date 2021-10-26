import Cors from 'cors';
import dotenv from 'dotenv';
import jwks from 'jwks-rsa';
import jwt from 'express-jwt';
import Express from "express";
import { conectarBD } from './db/db.js'
import rutasProducto from './views/productos/routes.js';
import rutasUsuario from './views/usuarios/routes.js';
import rutasVenta from './views/ventas/routes.js';

dotenv.config({path:'./.env'});

const app = Express();

app.use(Express.json());
app.use(Cors());

var jwtCheck = jwt({
   secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://sistemaventas.us.auth0.com/.well-known/jwks.json'
   }),
 audience: 'api-sistemadeventas-napster',
 issuer: 'https://sistemaventas.us.auth0.com/',
 algorithms: ['RS256']
});

app.use(jwtCheck);


app.use(jwtCheck);

app.use(rutasUsuario);
app.use(rutasVenta);
app.use(rutasProducto);

const main = () => {
   return app.listen(process.env.PORT, () => {
      console.log(`Esuchando puerto ${process.env.PORT}`);
   });
};

conectarBD(main);