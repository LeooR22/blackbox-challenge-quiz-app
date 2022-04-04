import React from "react";
import { Link } from "react-router-dom";

export const Questions = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card mb-3 container">
        <div className="row g-0">
          <div className="col-md-4">
            <h2
              src="..."
              className="img-fluid rounded-start mt-3 mb-4"
              alt="..."
            >
              Question 1/10
            </h2>
            <span className="">
              "Who directed the movies &quot;Pulp Fiction&quot;, &quot;Reservoir
              Dogs&quot; and &quot;Django Unchained&quot;?"
            </span>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <button className="btn btn-outline-primary w-100 mb-4 mt-3">
                Quentin Tarantino
              </button>
              <button className="btn btn-outline-primary w-100 mb-4">
                Martin Scorcese
              </button>
              <button className="btn btn-outline-primary w-100 mb-4">
                Steven Spielberg
              </button>
              <button className="btn btn-outline-primary w-100 mb-4">
                James Cameron
              </button>
              <Link to={"/questions/2"}>
                <button className="btn btn-outline-primary w-100 mb-4">
                  James Cameron
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
