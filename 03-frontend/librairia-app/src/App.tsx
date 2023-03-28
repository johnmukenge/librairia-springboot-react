import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Hero';
import { LibrairyServices } from './layouts/HomePage/LibrairyServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibrairyServices />
      <Footer />
    </div>
  );
}

export default App;
