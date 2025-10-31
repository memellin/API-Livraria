const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id, title: "", duration, genre: ""});
});

router.post("/", (req, res) => {
    const newMovie = req.body;
    res.status(201).json({
        mensagem: "Successfully movie created",
        movie: newMovie
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    res.json({
        mensagem: `Movie ${id} was updated`,
        data: updatedData
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json({ mensagem: `Movie ${id} was deleted` });
});

module.exports = router;