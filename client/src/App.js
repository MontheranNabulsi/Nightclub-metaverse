import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NabarHead from "./components/organism/NabarHead";
import Footer from "./components/atoms/Footer.Atom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

import Chat from "./pages/Chat";

import { LoginProvider } from "./context/Login.Context";

function App() {
    return (
        <BrowserRouter>
            <LoginProvider>
                <div className="App">
                    <div className="container-fluid p-0 ">
                        <NabarHead />

                        <Routes>
                            <Route path="/user/:id" element={<UserProfile />} />
                            <Route path="/chat" element={<Chat />} />

                            <Route path="/" element={<Home />} />
                        </Routes>

                        <Footer />
                    </div>
                </div>
            </LoginProvider>
        </BrowserRouter>
    );
}

export default App;
