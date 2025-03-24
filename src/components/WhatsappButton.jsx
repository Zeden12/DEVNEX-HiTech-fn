import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = () => {
  const whatsappLink = "https://wa.me/250788338877"; // Update with the correct phone number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
      style={{ zIndex: 999 }}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsappButton;
