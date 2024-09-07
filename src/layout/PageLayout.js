import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PageLayout = ({children}) => {
  return (
    <div className="">
      <Navbar />
      <div className="px-5 sm:px-10">
      {children}
      </div>
      <Footer/>
    </div>
  );
};

export default PageLayout;
