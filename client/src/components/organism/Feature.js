import { Parallax } from "react-parallax";
import FeatureBackground from "../../assets/FeatureBackground.jpg";

export default () => {
    return (
        <Parallax bgImage={FeatureBackground} strength={800}>
            <div
                className="mask"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <section
                    draggable="false"
                    className="container pt-5"
                    data-v-271253ee=""
                >
                    <section className="mb-10 text-center">
                        <h2 className="fw-bold mb-5 text-center">
                            {" "}
                            <span className="me-1">Why is it better than</span>
                            <u className="me-1">IRL?</u>{" "}
                        </h2>
                        <div className="row gx-lg-5">
                            <div className="col-md-4 mb-5 mb-md-0">
                                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                                    {" "}
                                    <i
                                        className="fas fa-glass-cheers fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />{" "}
                                </div>
                                <h5 className="fw-bold mb-3">Open 24/7</h5>
                                <p className="mb-0" spellCheck="true">
                                    Laudantium totam quas cumque pariatur at
                                    doloremque hic quos quia eius. Reiciendis
                                    optio minus mollitia rerum labore facilis
                                    inventore voluptatem ad, quae quia sint.
                                    Ullam.
                                </p>
                            </div>
                            <div className="col-md-4 mb-5 mb-md-0">
                                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                                    {" "}
                                    <i
                                        className="fas fa-shield-alt fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />{" "}
                                </div>
                                <h5 className="fw-bold mb-3">Safe and solid</h5>
                                <p className=" mb-0">
                                    Eum nostrum fugit numquam, voluptates veniam
                                    neque quibusdam ullam aspernatur odio
                                    soluta, quisquam dolore animi mollitia a
                                    omnis praesentium, expedita nobis!
                                </p>
                            </div>
                            <div className="col-md-4 mb-5 mb-md-0">
                                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                                    {" "}
                                    <i
                                        className="fas fa-user-friends fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />{" "}
                                </div>
                                <h5 className="fw-bold mb-3">User Friendly</h5>
                                <p className="mb-0">
                                    Enim cupiditate, minus nulla dolor cumque
                                    iure eveniet facere ullam beatae hic
                                    voluptatibus dolores exercitationem? Facilis
                                    debitis aspernatur amet nisi?
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </Parallax>
    );
};
