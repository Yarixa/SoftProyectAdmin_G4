const express = require("express")
const courses = express.Router()

const courseController = require("../controllers/CoursesController.js")

const cors = require("cors")

courses.use(cors())

module.exports = courses;