import React, { useEffect } from "react";
import Hero from "../Hero";
import Service from "../../Service";
import Category from "../Category";
import Productcard from "../Productcard";
import { motion } from "framer-motion";
import Ads from "../Ads";
import Outdoor from "../Outdoor";
import Fruitplan from "../Fruitplant";
import Filter from "../Filter";
import Review from "../Review";
import Contact from "../Contact";
import LeafAnimation from "../Leafani";
import plantsData from "../../datas/plantdata";
import Servicenew from "../Servicenew";

function Homepage() {
  // Filter indoor plants directly
  const indoorPlants = plantsData.filter((plant) => plant.category === "indoor");
  const outdoorplants = plantsData.filter((plant) => plant.category === "outdoor");
  const fruitplants = plantsData.filter((plant) => plant.category === "fruit");

  useEffect(() => {
    document.documentElement.classList.add("overflow-x-hidden");
    document.body.classList.add("overflow-x-hidden");
  
    return () => {
      document.documentElement.classList.remove("overflow-x-hidden");
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  return (
    <div className="homepage">
      <LeafAnimation />
      <div className="heroPage container mb-12 lg:mb-16 section mt-24 lg:mt-20    " id="home">
        <Hero />
      </div>
      <div className="container section" id="service">
        <Servicenew />
      </div>
      <div className="container mt-24 mb-5 section" id="category">
        <Category />
      </div>
      <div className="container mt-24 mb-5 section " id="contact">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h2>
        <Filter />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-10">
          {indoorPlants.map((plant) => (
            <Productcard key={plant.id} item={plant} />
          ))}
        </div>
      </div>
      <motion.div className="container mb-5 section" id="ads"
                          initial={{ opacity: 0, y: 100 }}
                          whileInView={{ opacity: 1, y: window.innerWidth > 576 ? -5 : -5 }}
                          transition={{ duration: 0.6 }}
      >
        <Ads />
      </motion.div>
      <div className="container mb-5 section" id="productss">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-10">
          {outdoorplants.map((plant) => (
            <Outdoor key={plant.id} item={plant} />
          ))}
        </div>
      </div>
      <div className="container mb-5 section" id="productsss">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-10">
          {fruitplants.map((plant) => (
            <Outdoor key={plant.id} item={plant} />
          ))}
        </div>      </div>
      <div className=" mb-24 mt-24 section" id="review">
        <div >
          <h3 className="text-center text-[18px] lg:text-[25px]">
            Happy Customers <span className="txt text-[18px] lg:text-[25px]">, Happy Plants</span>
          </h3>
          <p className="text-center text-[10px] lg:text-[20px]">Beautiful plants, trusted service – see what our customers say</p>
        </div>
        <Review />
      </div>
      <div className=" section" id="contactss">
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
