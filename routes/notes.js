import express from "express";
import Note from "../lib/models/note";

var router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    const notes = await Note.find().batchSize(100);
    res.json(notes);
  })
  .post(async (req, res, next) => {
    const note = new Note(req.body);
    await note.save();
    res.statusCode(201).json(note);
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
  })
  .put(async (req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.json(note);
  })
  .delete(async (req, res, next) => {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  });

export default router;
