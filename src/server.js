import app from "./configServer.js"
import dbConnection from "./DBConnection.js"

const PORT = process.env.PORT || 4000


dbConnection()









app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})