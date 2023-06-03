import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import protoTypes from "prop-types";
import User from "../../services/User.service";

import { useLogin } from "../../context/Login.Context";

/**
 *
 * @param {function} param0 - handel closing the modal
 * @returns - a singin modal
 */
const SigninModal = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();

    const FormSubmitHandler = async (e) => {
        e.preventDefault();
        const user = new User({
            email,
            password,
        });
        const res = await user.signin();
        if (res) {
            login();
            handleClose();
        }
    };

    return (
        <Modal className="modal-dark-theme" show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={FormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

SigninModal.prototype = {
    handleClose: protoTypes.func,
};

export default SigninModal;
