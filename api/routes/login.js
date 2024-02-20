const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.post("/", loginController.handleNewUser);
router.get("/", loginController.getAllUsers);

module.exports = router;
