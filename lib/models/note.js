import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  owner: { type: String, required: true },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;
