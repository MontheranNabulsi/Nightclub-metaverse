import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export default () => {
    const token = Cookies.get("usertoken");
    if (!token) return false;

    const user = jwt_decode(token);
    return user;
};
