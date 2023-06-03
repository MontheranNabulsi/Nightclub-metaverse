const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

const { authenticate } = require("../config/jwt.config");

router.post("/api/user/login", userController.login);
router.post("/api/user/register", userController.register);

router.use(authenticate);
router.get("/api/logout", userController.logout);
router.get("/api/user/:id", userController.getUser);
router.put("/api/user/:id", userController.updateUser);

module.exports = router;
