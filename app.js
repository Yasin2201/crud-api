const express = require("express");
const low = require("lowdb");
const cors = require('cors')
const FileSync = require('lowdb/adapters/FileSync');
const articles = require("./routes/articles");

const db = low(new FileSync('db.json'));

db.defaults({
    drafts: []
}).write()

const app = express();
app.db = db;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use("/", articles);

module.exports = app;