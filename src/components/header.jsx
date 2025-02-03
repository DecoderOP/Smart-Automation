import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="relative w-full text-white">
      <div
        className="intro flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(../img/bg_3.png)",
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative text-center py-36">
          <div className="row">
            <div className="intro-text">
              <h1
                className="text-[72px] font-bold uppercase mt-0 mb-2"
                style={{ fontFamily: "Raleway, sans-serif", color: "#fff" }}
              >
                {props.data?.title || "Loading"}
                <span className="font-extrabold text-[#5ca9fb]">
                  {props.data?.highlight || ""}
                </span>
              </h1>
              <p
                className="text-[24px] font-light leading-[30px] mx-auto mb-14"
                style={{ color: "#fff" }}
              >
                {props.data?.paragraph || "Loading"}
              </p>
              {/* <a
                href="#features"
                className="inline-block px-6 py-3 bg-[#5ca9fb] text-white rounded-xl hover:bg-[#4a90e2] text-lg font-semibold transition duration-300 ease-in-out"
              >
                Learn More
              </a> */}
              {/* <button
                onclick="location.href='#features'"
                className="learn-more-btn inline-block px-6 py-3 bg-[#5ca9fb] text-white rounded-xl hover:bg-[#4a90e2] text-lg font-semibold transition duration-300 ease-in-out"
              >
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
