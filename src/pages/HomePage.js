import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import ConsultingSection  from '../components/section.js';
import FeaturedWorks from '../components/FeaturedWorks.js';
import Table from '../components/Table.js';
import Footer from '../components/Footer.js';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ConsultingSection />
      <FeaturedWorks />
      <Table/>
      <Footer />
    </>
  );
};

export default HomePage;
