import app from "./app";
import {startConnection} from './database';
 
startConnection();

app.listen(3000);
console.log("Server is running on port 3000");