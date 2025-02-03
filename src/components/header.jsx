import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-2 intro-text ">
                <h1 style={{ fontSize: "70px" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <div style={{ color: "black" }}>
                  <p> {props.data ? props.data.paragraph : "Loading"}</p>
                </div>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
