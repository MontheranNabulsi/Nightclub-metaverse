import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import UpdateUserInfo from "../components/moleculles/UpdateUserInfo.Moleculles";
import UserProfileInfo from "../components/moleculles/UserProfileInfo.Moleculles";

import User from "../services/User.service";
import "./UserProfile.css";

export default () => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [lotalty, setLotalty] = useState("");
    const [membership, setMembership] = useState("");
    const navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);

    /**
     * fetch the user info
     */
    useEffect(() => {
        const getInfo = async () => {
            const user = new User({ id });
            const res = await user.getInfo();
            if (res) {
                setFirstName(res.firstName);
                setLastName(res.lastName);
                setEmail(res.email);
                setLotalty(res.loyaltyStatus);
                setMembership(res.membershipStatus);
                setLoaded(true);
            } else {
                navigate("/");
            }
        };
        getInfo();
    });

    return (
        <div className="row">
            {loaded && (
                <div className="container mt-5" style={{ margin: "50px 0px" }}>
                    <div className="row gutters px-3 py-3">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-lg-0 mb-md-3 mb-sm-3 mb-3  ">
                            <UserProfileInfo
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                            />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <UpdateUserInfo
                                id={id}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                membership={membership}
                                lotalty={lotalty}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
