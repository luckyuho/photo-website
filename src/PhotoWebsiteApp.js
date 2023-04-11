import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
require("./styles/style.css");

const PhotoWebsiteApp = () => {
  return (
    <div className="photowebsiteapp">
      <Helmet>
        <title>{"Photo Website"}</title>
      </Helmet>
      <Nav />
      <Homepage />
    </div>
  );
};

export default PhotoWebsiteApp;
