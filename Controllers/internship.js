const { log } = require("console")
const internshipModel = require("../Model/internship")

const internship = (req, res) => {
  res.render("pages/internship")
}

const internshipData = async (req, res) => {
  try {
    const {
      name,
      date_of_birth,
      email,
      phone,
      address,
      city,
      region,
      zip_code,
      institution,
    } = req.body
    if (
      !name ||
      !date_of_birth ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !region ||
      !zip_code ||
      !institution
    )
      return res.status(404).json({ message: "Fill All The Fields" })
    const internData = new internshipModel({
      name,
      date_of_birth,
      email,
      phone,
      address,
      city,
      region,
      zip_code,
      institution,
    })
    await internData.save()
    res.status(200).send("<h1>Thank You for your response</h1>")
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const getInternshipData = async (req, res, next) => {
  try {
    const result = await internshipModel.find({})
    res.render("pages/internship_data", { result })
  } catch (error) {
    next(error.message)
  }
}

module.exports = { internship, internshipData, getInternshipData }
