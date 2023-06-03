import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import SignInUpGroup from "./SignInUpGroup";
import AccountDropdown from "../moleculles/AccountDropdown.Moleculles";

import { useLogin } from "../../context/Login.Context";

/**
 * react element which shows the navbar of the website
 *
 */
const NabarHead = () => {
    const { user, auth } = useLogin();

    return (
        <>
            <Navbar
                className="sticky-top"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Metaverse Night Club
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="/chat">
                                Chat
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {!auth && <SignInUpGroup />}
                            {auth && <AccountDropdown userId={user} />}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NabarHead;
