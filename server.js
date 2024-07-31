const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const { Db } = require('mongodb');
const { connect } = require('process');

const authrouter = require("./routes/userroutes");
mongoose.connect("mongodb://localhost:27017/userdetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});
db.once("open", () => {
    console.log("Database is connected")
});

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const Port = 5001;
app.listen(Port, () => {
    console.log(`server is running ${Port}`);
});

app.use("/", authrouter);
