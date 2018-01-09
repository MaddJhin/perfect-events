// Controller
const express = require("express");
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response){
    response.render("about");
});

router.get("/about", function (req, res) {
    res.render("about");
});

router.get("/services", function (req, res) {
    res.render("services");
});

router.get("/projects", function (req, res) {
  res.render("projects");
});

module.exports = router;
