import express from "express";
import cors from "cors";
import db from "./config/db.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json());

db.authenticate()
.then(()=>{
    db.sync()
    .then(() => console.log('Conectado al Servidor Mysql'))
    .catch(error => console.log(error.message));
})
.catch((error)=>console.log(error.message))

app.use(cors());

app.use('/', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});