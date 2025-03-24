// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappButton from '../components/WhatsappButton'; 

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default MainLayout;
