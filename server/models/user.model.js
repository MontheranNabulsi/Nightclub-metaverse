const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} password - hash of the password
 *
 * @pre {function} hashPass - hash the password
 */
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    loyaltyStatus: {
        type: String,
        enum: ["Bronze", "Silver", "Gold", "Platinum"],
        default: "Bronze",
    },
    points: {
        type: Number,
        default: 0,
    },
    membershipStatus: {
        type: String,
        enum: ["Regular", "VIP"],
        default: "Regular",
    },
});

/** save the hash of the password instead of the password planit txt */
UserSchema.pre("save", function hashPass(next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model("User", UserSchema);
