import express from 'express' //Nuestro servidor web
// import bcrypt from "bcript" // Esta libreria nos ayudara a encriptar y desencriptar para JWT
import jwt from "jsonwebtoken" // Esta seria la libreria que nos permitira manejar Json Web Tokens
import http from "http"
import Login from "./routes/Login.js"
import SignUp from "./routes/SignUp.js"
import router from './routes/Login.js'
import path from 'path'
const app = express()

const PORT = process.env.PORT || 3000
    /*Esta linea es importane ya que con la misma estamos indicando que si el servidor encuentra el puerto 3000
    entonces que tome ese pero si dado el caso este codigo se encuentra en otro servidor alojado posiblemente no 
    tendria el puerto 3000 asi que lo que esta linea hara es tomar el puerto que tenga disponible para desplegar
    el API*/


// Ruta de ejemplo
app.get('/login', (req, res) => {
    res.send("hola mundo");
});

import  LogInCollection from 'moongose'
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const logiPath = path.join('./templetes') //templetes era una carpeta que tenia pero la borre dentro estaba un login.html sign.html
const loginPath = path.join()//aqui tambien tenia una carpeta que contenia mi estilo pero la borre porque me daba error 
console.log(loginPath);

app.set('view engine')
app.set('views', logiPath)
app.use(express.static(loginPath))





app.get('/signup', (req, res) => {
    res.render('signUp')
})
app.get('/', (req, res) => {
    res.render('login')
})





app.post('/signup', async (req, res) => {
    
 //obteniendo cuerpo de la data 

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    const checking = await LogInCollection.findOne({ name: req.body.name })

   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render( { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})


app.use("/login", Login)
app.use("/signup", SignUp)


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`La aplicación está funcionando en http://localhost:${PORT}`);
});