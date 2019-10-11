const express = require("express");
const nameRouter = require("/routes");
const hbs = require("express-handlebars")
const db = require("./db")

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded())
app.use(habitRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000")
})