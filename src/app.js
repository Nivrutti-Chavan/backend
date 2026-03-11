const express = require("express");
const app = express();
const notemodel = require("./models/note.model")

app.use(express.json());

const notes = [];

app.post("/note", async (req, res) => {
    const data = req.body;
    await notemodel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "note created"
    })
})

app.get("/notes", async (req, res) => {
    const notes = await notemodel.find()
    res.status(200).json({
        message: "fetch data successfully",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notemodel.findOneAndDelete({
        _id: id

    })
    res.status(200).json({
        message: "notes deleted successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await notemodel.findByIdAndUpdate({ _id: id }, { description: description })

    res.status(200).json({
        message: "updated successfully"
    })
})

module.exports = app;