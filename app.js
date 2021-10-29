const express = require("express");
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const articles = require("./routes/articles");

const db = low(new FileSync('db.json'));

db.defaults({
    drafts: []
}).write()

const app = express();
app.db = db;
app.use(express.urlencoded({ extended: false }));
app.use("/", articles);

module.exports = app;