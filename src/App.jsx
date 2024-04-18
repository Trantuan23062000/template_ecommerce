import React from "react";
import Navbar from "./componets/navbar";
import Sidebar from "./componets/siderBar";
import Banner from "./componets/banner";
import Features from "./componets/features";
import Category from "./componets/category";
import Arrival from "./componets/arrival";
import Product from "./componets/product";
import Footer from "./componets/footer";
import Copy from "./componets/copy";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        {" "}
        {/* Remove flex-col for mobile */}
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100 w-full">
          {" "}
          {/* Change flex-col to flex and add w-full */}
          <Banner />
          <Features />
          <Category />
          <Arrival />
          <Product />
         
        </div>
      </div>
      <Footer />
      <Copy/>
    </div>
  );
}

export default App;
