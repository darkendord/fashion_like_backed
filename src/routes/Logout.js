import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
})



export default router