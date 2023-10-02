import express from "express";

const app = express();
// app.use(cors());
//El metodo json hace que nuestro servidor solo maneje json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;