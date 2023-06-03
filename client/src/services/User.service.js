import axios from "axios";
/**
 * Class representing a User
 */
class User {
    /**
     *
     * Creat a user
     * @param {object} param0
     * @param {string} param0.id - the user ID in the DB
     * @param {string} param0.firstName - the user firstname
     * @param {string} param0.lastName - the user lastname
     * @param {string} param0.email - the user email
     * @param {string} param0.email - the user password
     */
    constructor({ id, firstName, lastName, email, password }) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    /**
     * creates a new user in the DB
     * @returns {object} - return the created user info, in case of an error it will return false
     */
    register() {
        return axios
            .post("http://localhost:8000/api/user/register", this, {
                withCredentials: true,
            })
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    /**
     *  sing in the user by checking its credintals in the DB
     * @returns {boolean} - returns true in case of success, in case of an error it will return false
     */
    signin() {
        return axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email: this.email,
                    password: this.password,
                },
                { withCredentials: true }
            )
            .then(() => true)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    /**
     *
     * @returns {object} - returns user's info (only for the signed in person), in case of an error it will lretrun false
     */
    getInfo() {
        return axios
            .get(`http://localhost:8000/api/user/${this._id}`, {
                withCredentials: true,
            })
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    /**
     *
     * @returns {object} return the updated user info, in case of an error it will return false
     */
    updateInfo() {
        return axios
            .put(
                `http://localhost:8000/api/user/${this._id}`,
                {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                },
                {
                    withCredentials: true,
                }
            )
            .then((user) => user.data)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
    /**
     *
     * @returns {boolean}, returns true in case of successful logut, otherwise false
     */
    static logout() {
        return axios
            .get("http://localhost:8000/api/logout", {
                withCredentials: true,
            })
            .then(() => true)
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
}
export default User;
