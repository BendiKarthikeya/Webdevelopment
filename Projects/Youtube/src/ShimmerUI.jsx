import React from "react";

const ShimmerUI = () => {
    // Example: 8 shimmer video cards in a grid
    return (
        <div className="container mt-4">
            <div className="row">
                {[...Array(8)].map((_, idx) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                        <div className="card">
                            <div
                                className="placeholder-glow"
                                style={{ height: "180px", background: "#e0e0e0" }}
                            >
                                <span className="placeholder col-12" style={{ height: "100%", display: "block" }}></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-8"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShimmerUI;