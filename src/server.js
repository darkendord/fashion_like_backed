import app from "./configServer.js"
import dbConnection from "./utilities/dbConnection.js"
import LoginRoute from "./routes/Login.js"
import SignUpRoute from "./routes/Signup.js"
import LogoutRoute from "./routes/Logout.js"
const PORT = process.env.PORT || 4000


dbConnection()



app.use("/api/login", LoginRoute)
app.use("/api/signup", SignUpRoute)
app.use("/api/logout", LogoutRoute)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})