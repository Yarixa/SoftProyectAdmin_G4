const db = require("../database/db.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Course = require("../models/Course")

process.env.SECRET_KEY = 'secret'
