import express from "express";
import morgan from "morgan";
import path from "path"; 
/* Morgan es un middleware, cada vez que se ejecute una funcion
pasara por morgan*/
import cors from "cors";

import taskRoutes from "./routes"; /* No hace falta señalar el archivo
pues en typescript y vanilla Javascript buscara ese import por defecto*/

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", taskRoutes); /* Esto obliga a que si quiere ir a la pagina principal
primero debe incluir "/api" para que pueda ver el modulo, caso contrario dara error*/

app.use(express.static(path.join(__dirname,"..","..", "dist")))
export default app;