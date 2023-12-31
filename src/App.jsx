import React from 'react';

import CTA from "./components/CTA";
import Download from "./components/Download";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Tabs />
      <Download />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
