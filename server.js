import express from 'express' //Nuestro servidor web
// import bcrypt from "bcript" // Esta libreria nos ayudara a encriptar y desencriptar para JWT
import jwt from "jsonwebtoken" // Esta seria la libreria que nos permitira manejar Json Web Tokens
import http from "http"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
const app = express()

const PORT = process.env.PORT || 3000
    /*Esta linea es importane ya que con la misma estamos indicando que si el servidor encuentra el puerto 3000
    entonces que tome ese pero si dado el caso este codigo se encuentra en otro servidor alojado posiblemente no 
    tendria el puerto 3000 asi que lo que esta linea hara es tomar el puerto que tenga disponible para desplegar
    el API*/


// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send("hola mundo");
});


app.use("/login", Login)
app.use("/signup", SignUp)


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`La aplicación está funcionando en http://localhost:${PORT}`);
});