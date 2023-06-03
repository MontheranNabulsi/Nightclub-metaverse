import protoType from "prop-types";

/**
 * react element which shows the user info
 * @param {Object} param0
 * @param {string} param0.firstName - the user firstname
 * @param {string} param0.lastName - the user lastname
 * @param {string} param0.email - the user email
 *
 */
const UserProfileInfo = ({ firstName, lastName, email }) => {
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="account-settings">
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt="Maxwell Admin"
                            />
                        </div>
                        <h5 className="user-name">{`${firstName} ${lastName}`}</h5>
                        <h6 className="user-email">{email}</h6>
                    </div>
                    <div className="about">
                        <h5 className="mb-2 text-primary">About</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas sit unde qui eveniet ab recusandae
                            maiores, molestiae nobis repudiandae eaque
                            dignissimos quo explicabo, architecto deleniti. Iste
                            unde cumque veniam earum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

UserProfileInfo.prototype = {
    firstName: protoType.string,
    lastName: protoType.string,
    email: protoType.string,
};
export default UserProfileInfo;
