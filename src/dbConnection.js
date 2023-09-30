import mongoose from "mongoose";

const dbConnection = async() => {
    // const uri = `mongodb://localhost:27017/fashionlike15:Password@123@PROJECT'S ORG.PROJECT 0`
    // const mongoURI = 'mongodb://localhost:27017/mi_basededatos';

    // URL de conexión a MongoDB
    // const mongoURI = "mongodb://localhost:27017/usersDB";

    // // Opciones de conexión (opcional)
    // const options = {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // };

    try {
        const uri = "mongodb+srv://fashionlike15:" + encodeURIComponent("Password@123") + "@cluster0.ge8dnsz.mongodb.net/?retryWrites=true&w=majority";

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Funciona");

    } catch (error) {
        console.log("Hubo un error en la conexión a la base de datos", error);
    }



    // Conectar a MongoDB

    // .then(() => console.log("You have been connected to the database"))
    // .catch((e) => console.log("it has ocurred a issue with your connection", e));

};

export default dbConnection;