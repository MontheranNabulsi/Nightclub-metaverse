const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const JWT = require("../utilities/JWT");

module.exports.register = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    User.create({ firstName, lastName, email, password })
        .then((user) => {
            const token = JWT.createToken({
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
            });
            res.cookie("usertoken", token).json({
                msg: "success!",
            });
        })
        .catch((err) => {
            console.log("Error Code: ", err);
            if (err.code) res.status(409).json({ error: { code: err.code } });
            else res.status(400).json({ error: err });
        });
};
module.exports.login = (req, res) => {
    const { email, password } = req.body;
    let USER;
    User.findOne({ email })
        .then((user) => {
            if (user === null) {
                res.sendStatus(400);
                throw new Error("User Wasn't Found");
            }

            USER = user;

            return bcrypt.compare(password, user.password);
        })
        .then((correctPassword) => {
            if (!correctPassword) {
                return res.sendStatus(400);
            }
            const token = JWT.createToken({
                id: USER._id,
                firstName: USER.firstName,
                lastName: USER.lastName,
            });

            res.cookie("usertoken", token).json({
                msg: "success!",
                id: USER._id,
            });
        })
        .catch((err) => {
            console.log("error", err);
        });
};

module.exports.logout = (_req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
};
module.exports.getUser = (req, res) => {
    const { id } = req.params;
    if (id !== req.USER_ID) {
        return res.status(401).json({ authorized: false });
    } else {
        User.findOne({ _id: id }).then((user) => {
            res.json(user);
        });
    }
};

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    if (id !== req.USER_ID) {
        return res.status(401).json({ Unauthorized: false });
    } else {
        let { firstName, lastName, email } = req.body;
        const data = { firstName, lastName, email };
        User.findOneAndUpdate({ _id: id }, data, { new: true }).then((user) => {
            res.json(user);
        });
    }
};
