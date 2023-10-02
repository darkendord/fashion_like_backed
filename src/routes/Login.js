import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../utilities/jsonWebToken.js";
const router = express.Router();

router.post("/", async(req, res) => {
    try {
        // Recupera los datos del formulario
        const { username, password, email } = req.body;

        //revisa si el usuario ingresado existe
        const userFound = await UserModel.findOne({ username });

        //Revisa si el email ingresado existe
        const emailFound = await UserModel.findOne({ email });

        //Si no se pudo encontrar ni el usuario ni el email
        if (!userFound || !emailFound)
            return res.status(400).json("User not found");

        //Comparamos la contraseña ingresada por el usuario con la contraseña del usuario revisado mas arriba en caso de que haya sido encontrado
        const isMatchPassword = await bcrypt.compare(password, userFound.password);
        //Validamos el resultado de la comparacion de mas arriba
        if (!isMatchPassword) return res.status(400).json("Incorrect credentials");

        const hashedPassword = await bcrypt.hash(password, 10);

        // Tomamos los datos del usuario para tomar el id para la generacion del token
        const autenticatedUser = new UserModel({
            username,
            password: hashedPassword,
            email,
        });

        //Creamos un token
        const token = createAccessToken({ id: autenticatedUser._id });
        res.cookie("token", token);
        res.json({
            id: autenticatedUser._id,
            username: autenticatedUser.username,
            email: autenticatedUser.email,
            createdAt: autenticatedUser.createdAt,
            UpdateAt: autenticatedUser.updatedAt,
            message: "User Login Successful"
        });


    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Error in login" }, error);
    }
});

export default router;