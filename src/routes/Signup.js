import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../utilities/jsonWebToken.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola register");
});

// Ruta para procesar el formulario de registro
router.post("/", async(req, res) => {
    try {
        // Recupera los datos del formulario
        const { username, password, email } = req.body;

        // Verifica si el usuario ya existe en la base de datos
        const existingUser = await UserModel.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        // Cifra la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario
        const newUser = new UserModel({
            username,
            password: hashedPassword,
            email,
        });

        // Guarda el usuario en la base de datos
        await newUser.save();

        const token = createAccessToken({ id: newUser._id });
        res.cookie('token', token)
        res.status(201).json({ message: "Usuario registrado exitosamente" });

        res.json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            createdAt: newUser.createdAt,
            UpdateAt: newUser.updatedAt,
        });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Hubo un error en el registro" });
    }
});

export default router;