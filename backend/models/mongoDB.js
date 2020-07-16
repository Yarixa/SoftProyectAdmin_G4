const dbConfig = require("../config/mongoDB.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./Document.js")(mongoose);

module.exports = db;
