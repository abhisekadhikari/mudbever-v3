const router = require("express").Router()
const homeController = require("../Controllers/home")
const contact = require("../Controllers/contact")
const aboutController = require("../Controllers/about")
const servicesController = require("../Controllers/services")
const internshipController = require("../Controllers/internship")
const requirementController = require("../Controllers/requirement")
const appointmentController = require("../Controllers/appointment")

// Index Page

router.get("/", homeController)

// Contact Page

router.get("/contact", contact.contact)

// About Page

router.get("/about", aboutController)

// Services Page

router.get("/services", servicesController.services)

// Teams Page

router.get("/teams", (req, res) => {
  res.render("pages/team")
})

// Internship Page

router.get("/internship", internshipController.internship)

// 404 - Not Found

router.get("*", (req, res) => {
  res.render("pages/404")
})

// Post Requests

// 1. Contact
router.post("/contact", contact.contactData)

// 2. Services

router.post("/services", servicesController.servicesPost)

// 3. Internship

router.post("/internship", internshipController.internshipData)

// 4. Requirements

router.post("/requirements", requirementController)

// 5. Appointments

router.post("/appointment", appointmentController)

// End Post Requests

module.exports = router
