import React from "react";
import './../style/media.css';
import './../style/style.css';
import NavbarList from './NavbarList';
import HomeList from "./HomeList";
import AboutList from "./AboutList";
import ServicesList from "./ServicesList";
import PortfolioList from "./PortfolioList";
import FAQList from "./FAQList";


function SmallRouter() {
  return (
    <>
      <NavbarList />
      <HomeList />
      <AboutList />
      <ServicesList />
      <PortfolioList />
      <FAQList />
    </>
  );
}

export default SmallRouter;
