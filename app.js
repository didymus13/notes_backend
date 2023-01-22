require("dotenv").config();

import index from "./routes/index";
import "./lib/database";
import notesRouter from "./routes/notes";

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", usersRouter);
app.use("/notes", notesRouter);

module.exports = app;
