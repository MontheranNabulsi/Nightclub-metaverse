import React, { useContext, useState } from "react";
import Authenticate from "../utilities/Authenticate";

const LoginContext = React.createContext();

/**
 * @typedef {Object} LoginStatus
 * @property {string} user - user id
 * @property {boolen} auth - authentication status
 * @property {function} logout - set the usestate of login as false
 * @property {function} login - set the usestate of login as true
 */

/**
 *
 * @returns {LoginStatus}  - the login usestate status
 */
export const useLogin = () => {
    return useContext(LoginContext);
};
/**
 *
 * react element Context.Provider
 */
export const LoginProvider = ({ children }) => {
    const [AUTH, setAUTH] = useState(Authenticate());

    const logout = () => setAUTH(Authenticate());
    const login = () => setAUTH(Authenticate());

    return (
        <LoginContext.Provider
            value={{
                user: AUTH.id,
                firstName: AUTH.firstName,
                lastName: AUTH.lastName,
                auth: AUTH,
                logout,
                login,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};
