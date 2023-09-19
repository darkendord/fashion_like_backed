import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    res.send("You have signed up succesfull");
});

export default router;