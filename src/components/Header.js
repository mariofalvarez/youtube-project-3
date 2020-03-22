import React from "react";

function Header() {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href="#">
                            <span>
                                <img
                                    src="assets/img/logo.png"
                                    style={{ width: "175px" }}
                                />
                            </span>
                        </a>
                        <button
                            data-toggle="collapse"
                            className="navbar-toggler"
                            data-target="#navcol-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    {/* <div className="collapse navbar-collapse" id="navcol-1">
                        <p className="ml-auto navbar-text actions">
                            {" "}
                            <a
                                className="btn btn-light action-button bg-dark"
                                href="signup.html"
                                style={{ color: "rgb(227,201,177)" }}
                            >
                                SAVED VIDEOS
                            </a>
                            <a
                                className="btn btn-light action-button bg-dark"
                                role="button"
                                href="signup.html"
                                style={{ color: "rgb(227,201,177)" }}
                            >
                                NEW SEARCH
                            </a>
                        </p>
                    </div> */}
                </div>
            </nav>
        </>
    );
}

export default Header;
