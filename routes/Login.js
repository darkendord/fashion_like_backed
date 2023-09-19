import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
    res.send("You have login successfull");
});

export default router;