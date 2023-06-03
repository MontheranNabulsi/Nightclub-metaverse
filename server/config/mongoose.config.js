const mongoose = require("mongoose");
module.exports.connect = () => {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV == "test") {
            mongoose
                .connect("mongodb://localhost:27017/Nightclub")
                .then(() => {
                    console.log(
                        "Test Database Connection has been establsied."
                    );
                    resolve();
                })
                .catch((err) => {
                    console.log("there was an error", err);
                    reject();
                });
        } else {
            mongoose
                .connect(
                    "mongodb+srv://user1:pys0GUQN5U34P0Rj@cluster0.es8q3.mongodb.net/Nightclub?retryWrites=true&w=majority"
                )
                .then(() => {
                    console.log("Database Connection has been establsied.");
                    resolve();
                })
                .catch((err) => {
                    console.log("there was an error", err);
                    reject();
                });
        }
    });
};
