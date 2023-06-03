import { Parallax } from "react-parallax";

import joinUsBackground from "../../assets/joinUsBackground.jpg";

export default () => {
    return (
        <Parallax bgImage={joinUsBackground} strength={800}>
            <div
                className=" text-center bg-image "
                style={{
                    height: 500,
                    backgroundSize: "cover",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                aria-controls="#picker-editor"
            >
                <div
                    className="mask"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                >
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-10">
                                <div className="text-white pb-md-5">
                                    <h1 className="my-md-5 mb-4 px-4 px-md-5 display-3 fw-bold ls-tight">
                                        {" "}
                                        <span>
                                            The First Night Club In The
                                            Metaverse
                                        </span>{" "}
                                        <br />{" "}
                                    </h1>{" "}
                                    <a
                                        className="btn btn-outline-light btn-lg py-3 px-5 me-2"
                                        href="#!"
                                        role="button"
                                        aria-controls="#picker-editor"
                                        draggable="false"
                                    >
                                        Join Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};
