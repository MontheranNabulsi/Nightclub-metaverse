import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import { useLogin } from "../context/Login.Context";

import "./Chat.css";
const Chat = () => {
    const [socket] = useState(() => io("localhost:8000"));
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [isSocket, setIsSocket] = useState(true);
    const messagesEndRef = useRef(null);
    const { user, auth, firstName, lastName } = useLogin();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollTop =
            messagesEndRef.current.scrollHeight + 500;
    };
    const FormSubmitHandler = () => {
        const msg = message.trim();
        if (msg.length === 0) return;

        const data = {
            user: user,
            message: msg,
            firstName: firstName,
            lastName: lastName,
            time: new Date(),
        };
        socket.emit("send-message", data);
        setMessage("");

        data.self = true;
        setMessages((prevMessages) => {
            return [...prevMessages, data];
        });
    };
    const socketHandler = () => {
        socket.on("receive-message", (data) => {
            data.time = new Date(data.time);
            setMessages((prevMessages) => {
                return [...prevMessages, data];
            });
        });
    };
    useEffect(() => {
        if (isSocket) {
            socketHandler();
            setIsSocket(false);
        } else if (auth) {
            scrollToBottom();
        }
    }, [messages]);

    return (
        <>
            {auth && (
                <section className="gradient-custom" style={{}}>
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-7 col-xl-7 ">
                                <ul
                                    ref={messagesEndRef}
                                    className="chat-box d-flex flex-column list-unstyled text-white"
                                >
                                    <li className="chat-other  col-10">
                                        <div className="card mask-custom">
                                            <div
                                                className="card-header d-flex justify-content-between p-3"
                                                style={{
                                                    borderBottom:
                                                        "1px solid rgba(255,255,255,.3)",
                                                }}
                                            >
                                                <p
                                                    className="fw-bold mb-0"
                                                    style={{ color: "red" }}
                                                >
                                                    Admin
                                                </p>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-0">
                                                    Please, follow the rules &
                                                    guidlines
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                    {messages.map((msg, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={
                                                    "mb-4 col-10" +
                                                    (msg.self
                                                        ? " chat-self"
                                                        : " chat-other")
                                                }
                                            >
                                                <div className="card mask-custom">
                                                    <div
                                                        className="card-header d-flex justify-content-between p-3"
                                                        style={{
                                                            borderBottom:
                                                                "1px solid rgba(255,255,255,.3)",
                                                        }}
                                                    >
                                                        <p className="fw-bold mb-0">
                                                            {msg.firstName}{" "}
                                                            {msg.lastName}
                                                        </p>
                                                        <p className="text-light small mb-0">
                                                            {msg.time.getUTCHours()}
                                                            {":"}
                                                            {msg.time.getUTCMinutes()}
                                                            {" UTC"}
                                                        </p>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">
                                                            {msg.message}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div
                                    className="form-group"
                                    style={{ textAlign: "start" }}
                                >
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Enter" &&
                                                e.ctrlKey === false &&
                                                e.shiftKey === false
                                            ) {
                                                e.preventDefault();
                                                FormSubmitHandler();
                                            }
                                        }}
                                        value={message}
                                    />
                                </div>
                                <button
                                    className="col-12 mt-1 btn btn-primary btn-lg btn-rounded float-end"
                                    onClick={FormSubmitHandler}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {!auth && (
                <h1
                    className="p-5"
                    style={{
                        height: window.outerHeight.toString() - 687 + "px",
                    }}
                >
                    Please <span style={{ color: "red" }}>login</span>, in order
                    to use the chat!!
                </h1>
            )}
        </>
    );
};

export default Chat;
