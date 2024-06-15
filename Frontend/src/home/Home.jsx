import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Contact from "../components/contact";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;
