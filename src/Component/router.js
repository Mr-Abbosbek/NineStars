import React from "react";
import './../style/media.css';
import './../style/style.css';
import NavbarList from './NavbarList';
import HomeList from "./HomeList";
import AboutList from "./AboutList";
import ServicesList from "./ServicesList";
import PortfolioList from "./PortfolioList";
import FAQList from "./FAQList";
import TeamList from "./TeamList";
import ClientList from "./ClientList";
import ContactList from "./ContactList";
import NewsLatterList from "./NewsLatterList";


function SmallRouter() {
  return (
    <>
      <NavbarList />
      <HomeList />
      <AboutList />
      <ServicesList />
      <PortfolioList />
      <FAQList />
      <TeamList />
      <ClientList />
      <ContactList />
      <NewsLatterList />
    </>
  );
}

export default SmallRouter;
