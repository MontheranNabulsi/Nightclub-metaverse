const User = require("../models/user.model");
module.exports.updateUserPoints = (points, id) => {
    User.findOne({ _id: id })
        .then((user) => user)
        .then((user) => {
            user.points += points;
            if (user.points <= 999) user.loyaltyStatus = "Bronze";
            else if (user.points <= 4999) user.loyaltyStatus = "Silver";
            else if (user.points <= 9999) user.loyaltyStatus = "Gold";
            else user.loyaltyStatus = "Platinum";
            
            
            return user;
        })
        .then((user) => {
            User.findOneAndUpdate({ _id: id }, user, { new: true }).then(
                (user) => user
            );
        });
};
