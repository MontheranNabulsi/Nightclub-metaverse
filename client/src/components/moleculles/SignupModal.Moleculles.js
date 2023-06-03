import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import protoTypes from "prop-types";
import User from "../../services/User.service";

import { useLogin } from "../../context/Login.Context";

/**
 *
 * @param {function} param0 - handel closing the modal
 * @returns a signup modal
 */
const SignupModal = ({ handleClose }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useLogin();

    const FormSubmitHandler = async (e) => {
        e.preventDefault();

        const user = new User({ firstName, lastName, email, password });
        const res = await user.register(user);

        if (res) {
            login();
            handleClose();
        }
    };

    return (
        <Modal className="modal-dark-theme" show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={FormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

SignupModal.prototype = {
    handleClose: protoTypes.func,
};
export default SignupModal;
