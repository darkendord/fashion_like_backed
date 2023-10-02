import jwt from "jsonwebtoken";


/*Esta funcion nos permitirá tener una forma mas compacta para generar nuestro token a travez de jsonwebtokens*/
/*Ademas de esto esta funcion esta implementada con una promesa para que en el archivo de server.js podamos usar
la syntaxis de async/await al momento de generar un token*/
export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, //Esta propiedad indica que informacion queremos almacenar en un token en este caso sera el id del usuario que se registro
            "secreto123", // Esta es la llave que permitira que el token sea decodificado posteriormente 
            { expiresIn: "1d" }, // Esto es un objeto de configuracion con el cual estamos indicado que el token generado solo tendra valides por un dia
            (error, token) => {
                if (error) reject(error); // Si el token no pudo ser generado correctamente entonces nos mostrara un error  
                resolve(token); // Si el token se genera correctamente entonces lo devolvera en la respuesta al front-end
            });
    });
};